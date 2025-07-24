import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaMinus, FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(null);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState([]);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const endRef = useRef();

 useEffect(() => {
  // Cancel speech when refreshing the page
  const handleBeforeUnload = () => {
    window.speechSynthesis.cancel();
  };
  window.addEventListener('beforeunload', handleBeforeUnload);
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, []);

const toggleChat = () => {
  if (isOpen) {
    window.speechSynthesis.cancel(); // stop voice when closing
  } else {
    setLang(null);
    setMsgs([]);
  }
  setIsOpen(!isOpen);
};


  const selectLanguage = (selected) => {
    setLang(selected);
    setMsgs([{ from: 'bot', text: selected === 'hi' ? 'हिंदी भाषा चुनी गई! पूछें...' : 'English selected! Ask me anything...' }]);
  };

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    const ut = new SpeechSynthesisUtterance(text);
    ut.lang = lang === 'hi' ? 'hi-IN' : 'en-US';
    window.speechSynthesis.speak(ut);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMsgs(prev => [...prev, userMsg]);
    setInput('');
    try {
      const res = await axios.post('http://localhost:5000/api/message', { message: input });
      const botMsg = { from: 'bot', text: res.data.reply };
      setMsgs(prev => [...prev, botMsg]);
      speakText(res.data.reply);
    } catch (err) {
      console.error(err);
      setMsgs(prev => [...prev, { from: 'bot', text: 'Error occurred.' }]);
    }
  };

  const micClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setInput(transcript);
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ language: lang === 'hi' ? 'hi-IN' : 'en-US' });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button onClick={toggleChat} className="bg-blue-600 p-3 rounded-full text-white">
          <FaComments size={24} />
        </button>
      )}

      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <span>Bank Chat</span>
            <button onClick={toggleChat}><FaMinus /></button>
          </div>

          {!lang ? (
            <div className="flex-1 flex flex-col items-center justify-center space-y-2">
              <button onClick={() => selectLanguage('en')} className="px-4 py-2 bg-blue-500 text-white rounded">English</button>
              <button onClick={() => selectLanguage('hi')} className="px-4 py-2 bg-green-500 text-white rounded">हिंदी</button>
            </div>
          ) : (
            <>
              <div className="flex-1 p-2 overflow-y-auto">
                {msgs.map((m,i) => (
                  <div key={i} className={`p-2 rounded-lg max-w-3/4 ${m.from==='bot'?'bg-gray-200 self-start':'bg-blue-200 self-end'}`}>
                    {m.text}
                  </div>
                ))}
                <div ref={endRef} />
              </div>
              <div className="p-2 flex space-x-2 border-t">
                <button onClick={micClick} className={`p-2 rounded-full ${listening?'bg-red-400':'bg-gray-300'}`}>
                  <FaMicrophone />
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  className="flex-1 border rounded px-2"
                  placeholder={lang==='hi'?'अपना संदेश लिखें...':'Type a message...'}
                  onKeyDown={e => e.key==='Enter' && sendMessage()}
                />
                <button onClick={sendMessage} className="p-2 bg-blue-600 text-white rounded"><FaPaperPlane /></button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
