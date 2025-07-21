import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import AccountsPage from './components/AccountsPage.js';
import LoansPage from './components/LoansPage.js';
import AdminPage from './components/AdminPage.js';
import SettingsPage from './components/SettingsPage.js';
import LoginPage from './components/LoginPage.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
