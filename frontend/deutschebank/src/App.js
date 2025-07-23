import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import AccountsPage from './components/AccountsPage.js';
import LoansPage from './components/LoansPage.js';
import AdminPage from './components/AdminPage.js';
import SettingsPage from './components/SettingsPage.js';
import LoginPage from './components/LoginPage.js';
import ChatBot from './components/ChatBot.js';

const App = () => {
  return (
    <Router>
      <ChatBot />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
