   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';
   import './styles/tailwind.css'; // Import Tailwind CSS
   import './styles/components.css'; // Import component styles
   import './styles/utilities.css'; // Import custom utilities
   import './styles/custom.css'; // Import custom styles

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   