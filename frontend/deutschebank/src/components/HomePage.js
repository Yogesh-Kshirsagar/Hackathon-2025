import React from 'react';

const HomePage = () => {
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
                      <path d="M3 12l2-2m0 0l7-7 7 7m-9 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7" />
                    </svg>
                    Dashboard
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
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                    Transactions
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
                      <path d="M12 20h9" />
                      <path d="M12 4h9" />
                      <path d="M4 7h16" />
                      <path d="M4 17h16" />
                    </svg>
                    Investments
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
        {/* Main content */}
        <main className="flex-1 flex flex-col p-8 pb-20">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-semibold select-none">
              Financial Dashboard
            </h1>
            <div className="flex items-center gap-6">
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
              <div
                className="flex items-center gap-3 cursor-pointer select-none"
                tabIndex={0}
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
            </div>
          </header>
          {/* Top stats */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="icon-bg-blue p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Balance</p>
                  <p className="text-xl font-semibold">₹42,589.00</p>
                </div>
              </div>
              <div className="text-green-600 text-sm font-semibold bg-green-100 rounded-md px-2 py-1 select-none">
                +2.5%
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="icon-bg-green p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 8v8m0 0l3-3m-3 3l-3-3" />
                    <circle cx={12} cy={12} r={10} />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Monthly Income</p>
                  <p className="text-xl font-semibold">₹5,200.00</p>
                </div>
              </div>
              <div className="text-red-600 text-sm font-semibold bg-red-100 rounded-md px-2 py-1 select-none">
                -1.1%
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="icon-bg-red p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 16v-8m0 0l3 3m-3-3l-3 3" />
                    <circle cx={12} cy={12} r={10} />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Monthly Expense</p>
                  <p className="text-xl font-semibold">₹3,890.00</p>
                </div>
              </div>
              <div className="text-green-600 text-sm font-semibold bg-green-100 rounded-md px-2 py-1 select-none">
                +5.7%
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="icon-bg-purple p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-purple-600"
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
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Savings Rate</p>
                  <p className="text-xl font-semibold">15.2%</p>
                </div>
              </div>
              <div className="text-gray-500 text-sm font-semibold bg-gray-200 rounded-md px-2 py-1 select-none">
                -0.8%
              </div>
            </div>
          </section>
          {/* Content grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Account summary */}
              <section className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg select-none">
                    Account Summary
                  </h2>
                  <select
                    aria-label="Select period"
                    className="border rounded-md px-3 py-1 text-sm cursor-pointer"
                    title="Select period"
                  >
                    <option>Last 30 days</option>
                    <option>Last 60 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                <div className="chart-container overflow-x-auto -mx-6 -mb-6">
                  <canvas
                    id="accountSummaryChart"
                    style={{ minWidth: 600, height: 220 }}
                  />
                </div>
                <div className="flex justify-center gap-8 mt-4 text-sm select-none text-gray-600 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />{" "}
                    Income
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />{" "}
                    Expenses
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-600 inline-block" />{" "}
                    Savings
                  </div>
                </div>
              </section>
              {/* Recent Transactions */}
              <section className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg select-none">
                    Recent Transactions
                  </h2>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline select-none"
                  >
                    View All
                  </a>
                </div>
                <ul className="flex flex-col gap-5 text-sm text-gray-700 font-medium">
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-300 bg-opacity-60 rounded-xl p-2 flex items-center justify-center w-10 h-10 shrink-0">
                        <svg
                          className="w-5 h-5 text-purple-700"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 7h10M7 11h4m1 3h5m-3 4l4-4m0 0l-4-4m4 4H8" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Amazon Purchase
                        </p>
                        <p className="text-xs text-gray-500">
                          Online Shopping · Aug 15
                        </p>
                      </div>
                    </div>
                    <div className="text-right select-text">
                      <p className="text-red-600 font-semibold">-₹89.99</p>
                      <p className="text-xs text-gray-400">Pending</p>
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-200 rounded-xl p-2 flex items-center justify-center w-10 h-10 shrink-0">
                        <svg
                          className="w-5 h-5 text-green-700"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 8v8m0 0l3-3m-3 3l-3-3" />
                          <circle cx={12} cy={12} r={10} />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Salary Deposit
                        </p>
                        <p className="text-xs text-gray-500">XYZ Corp · Aug 12</p>
                      </div>
                    </div>
                    <div className="text-right select-text">
                      <p className="text-green-600 font-semibold">+ ₹5,200.00</p>
                      <p className="text-xs text-gray-400">Completed</p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
            {/* Right column */}
            <div className="flex flex-col gap-6">
              {/* Active Loans */}
              <section className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold text-lg select-none">
                      Active Loans
                    </h2>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline select-none"
                    >
                      View All
                    </a>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <p className="font-semibold">Home Mortgage</p>
                        <p className="text-xs text-gray-500">15 year fixed</p>
                      </div>
                      <div className="font-semibold text-gray-900">3.25%</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "56%" }}
                      />
                    </div>
                    <div className="flex text-xs text-gray-500 justify-between mt-1 select-none">
                      <span>₹235,000</span>
                      <span>₹420,000</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <p className="font-semibold">Auto Loan</p>
                        <p className="text-xs text-gray-500">5 year term</p>
                      </div>
                      <div className="font-semibold text-gray-900">4.15%</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: "39%" }}
                      />
                    </div>
                    <div className="flex text-xs text-gray-500 justify-between mt-1 select-none">
                      <span>₹12,500</span>
                      <span>₹32,000</span>
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3 transition select-none">
                  Apply for New Loan
                </button>
              </section>
              {/* Quick Actions */}
              <section className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="font-semibold text-lg mb-4 select-none">
                  Quick Actions
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className="flex items-center justify-center gap-2 p-4 rounded-lg bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition select-none"
                    aria-label="Transfer"
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
                      <path d="M18 13v6a2 2 0 0 1-2 2h-3" />
                      <path d="M8 11V5a2 2 0 0 1 2-2h3" />
                      <path d="M12 21v-6m0-4v-4m0 0l3 3m-3-3l-3 3" />
                    </svg>
                    Transfer
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 p-4 rounded-lg bg-green-100 text-green-700 font-semibold hover:bg-green-200 transition select-none"
                    aria-label="Pay Bills"
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
                      <path d="M18 9v6a2 2 0 0 1-2 2h-3" />
                      <path d="M8 15v-6a2 2 0 0 1 2-2h3" />
                      <line x1={12} y1={4} x2={12} y2={8} />
                      <line x1={12} y1={16} x2={12} y2={20} />
                    </svg>
                    Pay Bills
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 p-4 rounded-lg bg-purple-100 text-purple-700 font-semibold hover:bg-purple-200 transition select-none"
                    aria-label="Deposit"
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
                      <circle cx={12} cy={12} r={10} />
                      <line x1={12} y1={8} x2={12} y2={16} />
                      <line x1={8} y1={12} x2={16} y2={12} />
                    </svg>
                    Deposit
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 p-4 rounded-lg bg-yellow-100 text-yellow-700 font-semibold hover:bg-yellow-200 transition select-none"
                    aria-label="Invest"
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
                      <path d="M12 20v-6m0 0l3 3m-3-3l-3 3" />
                      <circle cx={12} cy={12} r={10} />
                    </svg>
                    Invest
                  </button>
                </div>
              </section>
              {/* Loan Calculator */}
              <section className="bg-white p-6 rounded-xl shadow-sm mt-6">
                <h2 className="font-semibold text-lg mb-4 select-none">
                  Loan Calculator
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <label className="text-sm font-medium">
                      Loan Amount (₹)
                      <input
                        id="loanAmount"
                        type="number"
                        className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter amount"
                      />
                    </label>
                    <label className="text-sm font-medium">
                      Interest Rate (% annually)
                      <input
                        id="interestRate"
                        type="number"
                        step="0.01"
                        className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter rate"
                      />
                    </label>
                    <label className="text-sm font-medium">
                      Term (Years)
                      <input
                        id="loanTerm"
                        type="number"
                        className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter years"
                      />
                    </label>
                  </div>
                  <button
                    onclick="calculateLoan()"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-2 transition"
                  >
                    Calculate Monthly Payment
                  </button>
                  <div
                    id="monthlyPaymentResult"
                    className="text-center text-lg font-semibold text-green-700 mt-2 select-text"
                  />
                </div>
              </section>
            </div>
          </section>
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
          <span className="text-xs">Transactions</span>
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

export default HomePage;
