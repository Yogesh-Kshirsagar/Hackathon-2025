import React, { useState, useRef, useEffect } from 'react';
import { Table, Progress } from 'antd';
import axios from 'axios'; // Make sure to install axios

const LoansPage = () => {
  const [loanType, setLoanType] = useState("agri");
  const [agriLoanData, setAgriLoanData] = useState({
    full_name: '',
    aadhar_number: '',
    pan_number: '',
    land_area: '',
    crop_type: '',
    district: '',
    avg_profit: '',
    state: '',
    principal_amount: '',
    loan_purpose: '',
    time_period: ''
  });

  const [businessLoanData, setBusinessLoanData] = useState({
    full_name: '',
    aadhar_number: '',
    pan_number: '',
    business_type: '',
    operation_cycle: '',
    inventory_value: '',
    yearly_income: '',
    gst_details: '',
    bank_details: '',
    state: '',
    principal_amount: '',
    loan_purpose: '',
    time_period: ''
  });

  const [responseData, setResponseData] = useState(null);
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [interestRate, setInterestRate] = useState(null);
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

  // Sample loan data
  const [loans, setLoans] = useState([
    {
      id: 1,
      loanType: 'Agriculture Loan',
      principalAmount: '₹2,50,000',
      interestPercentage: '8.5%',
      commencementDate: '15/03/2022',
      repaymentTerm: '5 years',
      outstandingBalance: '₹1,75,000',
      loanStatus: 'Active',
      repaymentProgress: 65
    },
    {
      id: 2,
      loanType: 'Business Loan',
      principalAmount: '₹50,000',
      interestPercentage: '12%',
      commencementDate: '22/07/2023',
      repaymentTerm: '2 years',
      outstandingBalance: '₹38,000',
      loanStatus: 'Active',
      repaymentProgress: 40
    }
  ]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (loanType === "agri") {
      setAgriLoanData(prev => ({ ...prev, [name]: value }));
    } else {
      setBusinessLoanData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Function to calculate monthly payment
  const calculateMonthlyPayment = (principal, interestRate, timePeriod) => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = timePeriod;
    const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return payment.toFixed(2);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const completeData = loanType === "agri" ? agriLoanData : businessLoanData;
      const response = await axios.post('http://127.0.0.1:5000/generate', {
        ...completeData,
      });
      setResponseData(response.data); // Set the response data to state

      // Sample interest rate based on weather (for demonstration purposes)
      const sampleInterestRate = loanType === "agri" ? 8.5 : 12; // Example rates
      setInterestRate(sampleInterestRate);

      // Calculate monthly payment
      const principalAmount = parseFloat(completeData.principal_amount);
      const monthlyPayment = calculateMonthlyPayment(principalAmount, sampleInterestRate, parseInt(completeData.time_period));
      setMonthlyPayment(monthlyPayment);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Columns for loan table
  const loanColumns = [
    {
      title: 'Loan Type',
      dataIndex: 'loanType',
      key: 'loanType',
    },
    {
      title: 'Amount',
      dataIndex: 'principalAmount',
      key: 'principalAmount',
    },
    {
      title: 'Interest Rate',
      dataIndex: 'interestPercentage',
      key: 'interestPercentage',
    },
    {
      title: 'Start Date',
      dataIndex: 'commencementDate',
      key: 'commencementDate',
    },
    {
      title: 'Term',
      dataIndex: 'repaymentTerm',
      key: 'repaymentTerm',
    },
    {
      title: 'Remaining',
      dataIndex: 'outstandingBalance',
      key: 'outstandingBalance',
    },
    {
      title: 'Status',
      dataIndex: 'loanStatus',
      key: 'loanStatus',
      render: (status) => (
        <span style={{ color: status === 'Active' ? '#1890ff' : '#52c41a', fontWeight: 500 }}>
          {status}
        </span>
      )
    },
    {
      title: 'Progress',
      key: 'repaymentProgress',
      render: (_, record) => (
        <Progress
          percent={record.repaymentProgress}
          status={record.loanStatus === 'Paid' ? 'success' : 'active'}
          size="small"
        />
      )
    }
  ];

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>DeutscheBank Financial Dashboard</title>
      <style dangerouslySetInnerHTML={{ __html: `
        .sidebar::-webkit-scrollbar { width: 6px; }
        .sidebar::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0.2); border-radius: 3px; }
        .icon-bg-blue { background-color: #e0e7ff; }
        .icon-bg-green { background-color: #dcfce7; }
        .icon-bg-red { background-color: #fee2e2; }
        .icon-bg-purple { background-color: #ede9fe; }
        .chart-container { scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent; }
        .chart-container::-webkit-scrollbar { height: 6px; }
        .chart-container::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        select { -webkit-appearance: none; -moz-appearance: none; appearance: none; background-position: right 0.7rem center; background-repeat: no-repeat; background-size: 1rem; }
      `}} />

      <div className="flex h-full md:pl-64">
        {/* Sidebar */}
        <div className="sidebar fixed top-0 left-0 h-screen w-64 bg-blue-700 text-white flex flex-col z-10 hidden md:flex">
          <nav className="flex flex-col justify-between bg-blue-700 text-white w-64 p-6 overflow-y-auto">
            <div>
              <div className="flex items-center font-bold text-xl mb-10 select-none">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-900 mr-3">D</div>
                DeutscheBank
              </div>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a href="/home" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-800 transition">
                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M3 12l2-2m0 0l7-7 7 7m-9 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/accounts" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-800 transition">
                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <rect x={3} y={4} width={18} height={16} rx={2} ry={2} />
                      <line x1={16} y1={2} x2={16} y2={6} />
                      <line x1={8} y1={2} x2={8} y2={6} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                    </svg>
                    Accounts
                  </a>
                </li>
                <li>
                  <a href="/loans" className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-900 hover:bg-blue-800 transition">
                    <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx={12} cy={12} r={10} />
                      <path d="M12 8v4l3 3" />
                    </svg>
                    Loans
                  </a>
                </li>
                <li>
                  <a href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-800 transition">
                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx={12} cy={12} r={10} />
                      <line x1={12} y1={8} x2={12} y2={12} />
                      <line x1={12} y1={16} x2={12} y2={16} />
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
            <h1 className="text-xl font-semibold select-none">Accounts Overview</h1>
            <div className="flex items-center gap-6 relative" ref={dropdownRef}>
              <button aria-label="Notifications" className="relative text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 0 0-5-5.917V5a2 2 0 1 0-4 0v.083A6 6 0 0 0 4 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m5 0v1a3 3 0 1 1-6 0v-1z" />
                </svg>
                <span className="absolute -top-1 -right-1 inline-block w-2.5 h-2.5 bg-red-600 rounded-full" />
              </button>

              {/* Profile Dropdown */}
              <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className="bg-blue-600 text-white rounded-full w-9 h-9 flex items-center justify-center font-semibold">JD</div>
                <span className="text-gray-700 font-medium">Jishnu Deb</span>
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-12 w-44 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <ul className="py-1 text-sm text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 transition">Settings</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 transition">Logout</a></li>
                  </ul>
                </div>
              )}
            </div>
          </header>

          <div className="p-6">
            {/* Active Loans Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b border-gray-200 p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">Your Loan Portfolio</h2>
                  <div className="flex items-center space-x-4">
                    <button className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors">
                      Export Statement
                    </button>
                    <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm bg-white">
                      <option>All Loans</option>
                      <option>Active Only</option>
                      <option>Closed Loans</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Loans Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Rate</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Term</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {loans.map((loan) => (
                      <tr key={loan.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                              <span className="text-blue-600 font-medium">{loan.loanType.charAt(0)}</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{loan.loanType}</div>
                              <div className="text-sm text-gray-500">{loan.commencementDate}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium">{loan.principalAmount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            parseFloat(loan.interestPercentage) > 10 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {loan.interestPercentage}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{loan.repaymentTerm}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            loan.loanStatus === 'Active' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {loan.loanStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className={`h-2.5 rounded-full ${
                              loan.loanStatus === 'Active' ? 'bg-blue-600' : 'bg-green-600'
                            }`} style={{ width: `${loan.repaymentProgress}%` }}></div>
                                                    </div>
                          <div className="text-xs text-gray-500 mt-1">{loan.repaymentProgress}% paid</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Card Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div>Showing {loans.length} loans</div>
                  <div className="flex space-x-4">
                    <button className="hover:text-gray-700">Previous</button>
                    <button className="hover:text-gray-700">Next</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Loan Application Form */}
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-white min-h-screen p-8">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Loan Application Form</h1>

                {responseData ? (
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-green-600 mb-4 flex items-center">
                        <svg className="w-8 h-8 mr-2 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path d="M12 2l9 9-9 9-9-9 9-9z" />
                        </svg>
                        Application Submitted Successfully!
                      </h2>
                      <div className="bg-gray-50 p-6 rounded-md shadow-md">
                        <h3 className="font-semibold mb-2 text-xl">For Your Application:</h3>
                        <div className="mt-4 space-y-2">
                          { interestRate && monthlyPayment && (
                              <div>
                                <div className="flex justify-between">
                                  <h4 className="font-medium text-lg">Sample Interest Rate:</h4>
                                  <span className="text-blue-600 font-semibold">{interestRate}%</span>
                                </div>
                                <div className="flex justify-between">
                                  <h4 className="font-medium text-lg">Estimated Monthly Payment:</h4>
                                  <span className="text-blue-600 font-semibold">₹{monthlyPayment}</span>
                                </div>
                                <div className="flex justify-between">
                                  <h4 className="font-medium text-lg">Risk of Loan Approval:</h4>
                                  <span className="text-red-600 font-semibold">Moderate</span>
                                </div>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setResponseData(null);
                        setMonthlyPayment(null);
                        setInterestRate(null);
                      }}
                      className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 shadow-md font-semibold"
                    >
                      Submit Another Application
                    </button>
                  </div>


                ) : (
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-8">
                    <label className="block mb-3 text-md font-medium text-gray-700">Select Loan Type</label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                      value={loanType}
                      onChange={(e) => setLoanType(e.target.value)}
                    >
                      <option value="agri">Agriculture Loan</option>
                      <option value="business">Business Loan</option>
                    </select>
                  </div>
                )}

                {!responseData && (
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Common Fields */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                          type="text"
                          name="full_name"
                          value={loanType === "agri" ? agriLoanData.full_name : businessLoanData.full_name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Aadhar Number</label>
                        <input
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                          type="text"
                          name="aadhar_number"
                          value={loanType === "agri" ? agriLoanData.aadhar_number : businessLoanData.aadhar_number}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Add all the new fields here */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">State</label>
                        <input
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                          type="text"
                          name="state"
                          value={loanType === "agri" ? agriLoanData.state : businessLoanData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Principal Amount</label>
                        <input
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                          type="number"
                          name="principal_amount"
                          value={loanType === "agri" ? agriLoanData.principal_amount : businessLoanData.principal_amount}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Loan Purpose</label>
                        <input
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                          type="text"
                          name="loan_purpose"
                          value={loanType === "agri" ? agriLoanData.loan_purpose : businessLoanData.loan_purpose}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Time Period (months)</label>
                        <input
                          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                          type="number"
                          name="time_period"
                          value={loanType === "agri" ? agriLoanData.time_period : businessLoanData.time_period}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Agriculture Loan Specific Fields */}
                      {loanType === "agri" && (
                        <>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Land Area (acres)</label>
                            <input
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                              type="number"
                              name="land_area"
                              value={agriLoanData.land_area}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Crop Type</label>
                            <input
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                              type="text"
                              name="crop_type"
                              value={agriLoanData.crop_type}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">District</label>
                            <input
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                              type="text"
                              name="district"
                              value={agriLoanData.district}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Average Profit</label>
                            <input
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                              type="number"
                              name="avg_profit"
                              value={agriLoanData.avg_profit}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </>
                      )}

                      {/* Business Loan Specific Fields */}
                      {loanType === "business" && (
                        <>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Business Type</label>
                            <input
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                              type="text"
                              name="business_type"
                              value={businessLoanData.business_type}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Operation Cycle</label>
                            <select
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                              name="operation_cycle"
                              value={businessLoanData.operation_cycle}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select</option>
                              <option value="seasonal">Seasonal</option>
                              <option value="year-round">Year-round</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Inventory Value</label>
                            <input
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                              type="number"
                              name="inventory_value"
                              value={businessLoanData.inventory_value}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Yearly Income</label>
                            <input
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                              type="number"
                              name="yearly_income"
                              value={businessLoanData.yearly_income}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">GST Details</label>
                            <input
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                              type="text"
                              name="gst_details"
                              value={businessLoanData.gst_details}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Bank Details</label>
                            <input
                              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                              type="text"
                              name="bank_details"
                              value={businessLoanData.bank_details}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </>
                      )}

                      <div className="md:col-span-2 flex justify-end mt-4">
                        <button
                          type="submit"
                          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-200"
                        >
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 flex justify-around bg-white border-t border-gray-200 shadow md:hidden">
        <a href="#" className="flex flex-col items-center justify-center py-2 text-blue-600 hover:text-blue-700">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M3 12l2-2m0 0l7-7 7 7m-9 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7" />
          </svg>
          <span className="text-xs">Dashboard</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-blue-700">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x={3} y={4} width={18} height={16} rx={2} ry={2} />
            <line x1={16} y1={2} x2={16} y2={6} />
            <line x1={8} y1={2} x2={8} y2={6} />
            <line x1={3} y1={10} x2={21} y2={10} />
          </svg>
          <span className="text-xs">Accounts</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-blue-700">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
          <span className="text-xs">Loans</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-blue-700">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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