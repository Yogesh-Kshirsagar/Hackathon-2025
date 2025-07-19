import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const App = () => {
  const chartRef = useRef(null); // Create a ref to hold the chart instance

  useEffect(() => {
    const ctx = document.getElementById('accountSummaryChart').getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const gradientBlue = ctx.createLinearGradient(0, 0, 0, 220);
    gradientBlue.addColorStop(0, 'rgba(59, 130, 246, 0.6)'); // blue-500
    gradientBlue.addColorStop(1, 'rgba(59, 130, 246, 0.1)');

    const gradientRed = ctx.createLinearGradient(0, 0, 0, 220);
    gradientRed.addColorStop(0, 'rgba(239, 68, 68, 0.5)'); // red-500
    gradientRed.addColorStop(1, 'rgba(239, 68, 68, 0.1)');

    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 220);
    gradientGreen.addColorStop(0, 'rgba(5, 150, 105, 0.5)'); // green-700
    gradientGreen.addColorStop(1, 'rgba(5, 150, 105, 0.05)');

    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: 'Income',
          data: [4000, 4200, 4100, 4500, 5300, 5800, 6000, 5500],
          fill: true,
          backgroundColor: gradientBlue,
          borderColor: '#3b82f6',
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 0,
          order: 3
        },
        {
          label: 'Expenses',
          data: [3000, 3500, 3300, 3700, 3500, 3900, 4100, 4000],
          fill: true,
          backgroundColor: gradientRed,
          borderColor: '#ef4444',
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 0,
          order: 2
        },
        {
          label: 'Savings',
          data: [700, 900, 800, 1000, 1200, 1300, 1500, 1400],
          fill: true,
          backgroundColor: gradientGreen,
          borderColor: '#059669',
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 0,
          order: 1
        },
      ]
    };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: '#1e293b',
            titleFont: { weight: 'bold' },
            cornerRadius: 6,
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 6000,
            ticks: {
              stepSize: 1000,
              callback: function (value) {
                return '₹' + value.toLocaleString();
              },
              color: '#64748b',
              font: { size: 11 }
            },
            grid: {
              color: '#e2e8f0',
              drawBorder: false,
            }
          },
          x: {
            ticks: {
              color: '#64748b',
              font: { size: 11 }
            },
            grid: {
              display: false,
              drawBorder: false,
            }
          }
        },
        elements: {
          line: {
            borderJoinStyle: 'round',
            borderCapStyle: 'round'
          }
        }
      }
    };

    // Create a new chart instance and store it in the ref
    chartRef.current = new Chart(ctx, config);

    // Cleanup function to destroy the chart instance on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
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
                    <path d="M12 16v-8m0 0l3 3m-3-3l-3 3