import React, { useState, useRef, useEffect } from 'react';

const LoansPage = () => {
  const [loanType, setLoanType] = useState("agri");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
<>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>DeutscheBank Financial Dashboard </title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    /* Custom scrollbar for sidebar */\n    .sidebar::-webkit-scrollbar {\n      width: 6px;\n    }\n    .sidebar::-webkit-scrollbar-thumb {\n      background-color: rgba(255,255,255,0.2);\n      border-radius: 3px;\n    }\n    /* Icon container backgrounds for stat cards */\n    .icon-bg-blue {\n      background-color: #e0e7ff; /* blue-200 */\n    }\n    .icon-bg-green {\n      background-color: #dcfce7; /* green-100 */\n    }\n    .icon-bg-red {\n      background-color: #fee2e2; /* red-100 */\n    }\n    .icon-bg-purple {\n      background-color: #ede9fe; /* purple-100 */\n    }\n    /* Scrollbar thumb for chart container */\n    .chart-container {\n      scrollbar-width: thin;\n      scrollbar-color: #cbd5e1 transparent;\n    }\n    .chart-container::-webkit-scrollbar {\n      height: 6px;\n    }\n    .chart-container::-webkit-scrollbar-thumb {\n      background: #cbd5e1;\n      border-radius: 3px;\n    }\n    /* Custom radio/select styling for time range dropdown */\n    select {\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      background-position: right 0.7rem center;\n      background-repeat: no-repeat;\n      background-size: 1rem;\n    }\n  "
        }}
      />
      <div className="flex h-full md:pl-64">
        {/* Sidebar */}
        <div className="sidebar fixed top-0 left-0 h-screen w-64 bg-blue-700 text-white flex flex-col z-10 hidden md:flex">
          <nav className="flex flex-col justify-between bg-blue-700 text-white w-64 p-6 overflow-y-auto">
            <div>
              <div className="flex items-center font-bold text-xl mb-10 select-none">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-900 mr-3">
                  D
                </div>
                DeutscheBank
              </div>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-800 transition"
                  >
                    <svg
                      className="w-5 h-5 text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12l2-2m0 0l7-7 7 7m-9 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 hover:bg-blue-800 transition"
                  >
                    <svg
                      className="w-5 h-5 text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x={3} y={4} width={18} height={16} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>
                    Accounts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-900 hover:bg-blue-800 transition"
                  >
                    <svg
                      className="w-5 h-5 text-blue-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <line x1={12} y1={8} x2={12} y2={12} />
                      <line x1={12} y1={16} x2={12} y2={16} />
                    </svg>
                    Loans
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-800 transition"
                  >
                    <svg
                      className="w-5 h-5 text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 8v4l3 3" />
                    </svg>
                    Settings
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <div className="mb-2 text-sm font-semibold">Need assistance?</div>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition">
                Contact Support
              </button>
            </div>
          </nav>
        </div>

        <main className="flex-1 flex flex-col p-8 pb-20">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold select-none">
          Accounts Overview
        </h1>
        <div className="flex items-center gap-6 relative" ref={dropdownRef}>
          <button
            aria-label="Notifications"
            className="relative text-gray-600 hover:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 0 0-5-5.917V5a2 2 0 1 0-4 0v.083A6 6 0 0 0 4 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m5 0v1a3 3 0 1 1-6 0v-1z" />
            </svg>
            <span className="absolute -top-1 -right-1 inline-block w-2.5 h-2.5 bg-red-600 rounded-full" />
          </button>

          {/* Profile Dropdown */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            tabIndex={0}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="bg-blue-600 text-white rounded-full w-9 h-9 flex items-center justify-center font-semibold">
              JD
            </div>
            <span className="text-gray-700 font-medium">Jishnu Deb</span>
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-12 w-44 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

          <div className="flex-1 bg-gradient-to-br from-blue-50 to-white min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Loan Application Form</h1>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-8">
          <label className="block mb-3 text-md font-medium text-gray-700">Select Loan Type</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
          >
            <option value="agri">🌾 Agriculture Loan</option>
            <option value="business">🏢 Business Loan</option>
          </select>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="text" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Aadhar</label>
              <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="text" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">PAN</label>
              <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="text" />
            </div>

            {loanType === "agri" && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Total Land (in acres)</label>
                  <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Crop Type</label>
                  <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Zone / Area</label>
                  <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Avg. Cultivation Profit</label>
                  <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="text" />
                </div>
              </>
            )}

            {loanType === "business" && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Business Type</label>
                  <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Seasonal / Regular</label>
                  <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400">
                    <option value="seasonal">Seasonal</option>
                    <option value="regular">Regular</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Current Inventory Value</label>
                  <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Yearly Income</label>
                  <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">GST Details</label>
                  <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Bank Details</label>
                  <input className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400" type="text" />
                </div>
              </>
            )}

            <div className="md:col-span-2 flex justify-end mt-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-200">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

        </main>
        
      </div>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex justify-around bg-white border-t border-gray-200 shadow md:hidden">
        <a
          href="#"
          className="flex flex-col items-center justify-center py-2 text-blue-600 hover:text-blue-700"
        >
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12l2-2m0 0l7-7 7 7m-9 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7" />
          </svg>
          <span className="text-xs">Dashboard</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-blue-700"
        >
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x={3} y={4} width={18} height={16} rx={2} ry={2} />
            <line x1={16} y1={2} x2={16} y2={6} />
            <line x1={8} y1={2} x2={8} y2={6} />
            <line x1={3} y1={10} x2={21} y2={10} />
          </svg>
          <span className="text-xs">Accounts</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-blue-700"
        >
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          <span className="text-xs">Loans</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-blue-700"
        >
          <svg
            className="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={12} cy={12} r={10} />
            <path d="M12 8v4l3 3" />
          </svg>
          <span className="text-xs">Settings</span>
        </a>
      </nav>
    </>
  );
};

export default LoansPage;
