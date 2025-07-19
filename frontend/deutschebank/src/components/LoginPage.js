import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  const updateForms = () => {
    if (isAdmin) {
      return (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Admin Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Admin Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">
            Login as Admin
          </button>
        </form>
      );
    } else if (isLogin) {
      return (
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">
            Login
          </button>
        </form>
      );
    } else {
      return (
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold">
            Sign Up
          </button>
        </form>
      );
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex font-sans">
      {/* Sidebar */}
      <div className="sidebar h-full w-64 bg-blue-700 text-white flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center font-bold text-xl mb-10 select-none">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-900 mr-3">D</div>
            DeutscheBank
          </div>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <button onClick={() => { setIsAdmin(false); setIsLogin(false); }} className="w-full text-left px-3 py-2 rounded-md transition">Sign Up</button>
            </li>
            <li>
              <button onClick={() => { setIsAdmin(false); setIsLogin(true); }} className="w-full text-left px-3 py-2 rounded-md transition">Login</button>
            </li>
          </ul>
        </div>
        <p className="text-xs text-blue-200 select-none">&copy; 2025 DeutscheBank</p>
      </div>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center relative">
        <div className="absolute top-4 right-4">
          <button onClick={toggleAdmin} className="text-sm text-blue-700 font-medium hover:underline">
            {isAdmin ? 'Back to User Login' : 'Admin Login'}
          </button>
        </div>

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-blue-700 transition-all">
            {isAdmin ? 'Admin Login' : isLogin ? 'Login to Your Account' : 'Create Your Account'}
          </h2>
          {updateForms()}
          <p className="text-sm text-center text-gray-600">
            {isLogin ? 'New user?' : 'Already a user?'}
            <button onClick={toggleAuth} className="text-blue-600 hover:underline font-medium">
              {isLogin ? 'Click here to sign up' : 'Click here to login'}
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
