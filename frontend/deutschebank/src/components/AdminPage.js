import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const AdminPage = () => {

  useEffect(() => {
    const loanTypeChart = new Chart(document.getElementById('loanTypePie'), {
      type: 'pie',
      data: {
        labels: ['Agriculture Loan', 'Business Loan'],
        datasets: [{
          data: [63, 37],
          backgroundColor: ['#3b82f6','#ef4444'],
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });

    const npaSectorChart = new Chart(document.getElementById('npaSectorPie'), {
      type: 'pie',
      data: {
        labels: ['Agriculture', 'Education', 'Business'],
        datasets: [{
          data: [40, 35, 25],
          backgroundColor: ['#ef4444', '#f97316', '#3b82f6', '#6366f1'],
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });

    const repaymentChart = new Chart(document.getElementById('repaymentPie'), {
      type: 'pie',
      data: {
        labels: ['On Time', 'Late', 'Default'],
        datasets: [{
          data: [70, 20, 10],
          backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });

    // Cleanup charts on unmount
    return () => {
      loanTypeChart.destroy();
      npaSectorChart.destroy();
      repaymentChart.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      {/* Top navigation */}
      <header className="bg-blue-700 text-white p-6 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold select-none">Admin Dashboard</h1>
        <span className="font-medium text-sm">Welcome, Admin</span>
      </header>

      <main className="p-6">
        {/* Top Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm relative">
            <h2 className="text-gray-500 text-sm font-medium mb-1">Active Loan Requests (Current Month)</h2>
            <p className="text-2xl font-semibold">₹425,000</p>
            <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">36</span>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-gray-500 text-sm font-medium mb-1">Total Disbursed (Current Month)</h2>
            <p className="text-2xl font-semibold">₹1,720,000</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-gray-500 text-sm font-medium mb-1">NPA (Current Month)</h2>
            <p className="text-2xl font-semibold text-red-600">₹120,000</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-gray-500 text-sm font-medium mb-1">New Users This Month</h2>
            <p className="text-2xl font-semibold">58</p>
          </div>
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
            <h2 className="font-semibold text-sm mb-2">Loan Type Distribution</h2>
            <div className="w-64 h-64">
              <canvas id="loanTypePie" width="192" height="192"></canvas>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
            <h2 className="font-semibold text-sm mb-2">NPA by Sector</h2>
            <div className="w-64 h-64">
              <canvas id="npaSectorPie" width="192" height="192"></canvas>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
            <h2 className="font-semibold text-sm mb-2">Repayment Status</h2>
            <div className="w-64 h-64">
              <canvas id="repaymentPie" width="192" height="192"></canvas>
            </div>
          </div>
        </section>

        {/* Loan Requests Table */}
        <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Loan Requests</h2>
            <span className="text-sm text-gray-500">Showing 1–10 of 36</span>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">Requester</th>
                <th className="py-2">Loan Type</th>
                <th className="py-2">CIBIL Score</th>
                <th className="py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 font-medium">Ankit Sharma</td>
                <td className="py-2">Home Loan</td>
                <td className="py-2">754</td>
                <td className="py-2">₹25,000</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 font-medium">Priya Mehta</td>
                <td className="py-2">Crop Loan</td>
                <td className="py-2">680</td>
                <td className="py-2">₹18,500</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 font-medium">Rahul Nair</td>
                <td className="py-2">Education Loan</td>
                <td className="py-2">812</td>
                <td className="py-2">₹40,000</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mt-4 gap-2">
            <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">Prev</button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">2</button>
            <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">3</button>
            <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300">Next</button>
          </div>
        </section>

        {/* Disbursed Loans Table */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Disbursed Loans</h2>
            <span className="text-sm text-gray-500">Updated hourly</span>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">Recipient</th>
                <th className="py-2">Loan Type</th>
                <th className="py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 font-medium">Manish Verma</td>
                <td className="py-2">Home Loan</td>
                <td className="py-2">₹85,000</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 font-medium">Sneha Rao</td>
                <td className="py-2">Auto Loan</td>
                <td className="py-2">₹15,500</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
