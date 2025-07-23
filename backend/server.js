const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chatbot = require('./chatbot/chatbot');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/message', async (req, res) => {
  const { message } = req.body;
  try {
    const result = await chatbot.textQuery(message);
    res.json({
      reply: result.fulfillmentText,
      action: result.action
    });
  } catch (e) {
    console.error('Dialogflow error:', e);
    res.status(500).json({ reply: 'Sorry, something went wrong.' });
  }
});

app.listen(5000, () => console.log('Server listening on port 5000'));
