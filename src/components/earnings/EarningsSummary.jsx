import { useState } from "react";
import { DollarSign, Calendar, Download, Filter } from "lucide-react";
import EarningsChart from "./EarningsChart";

const EarningsSummary = () => {
  const [timeRange, setTimeRange] = useState("month");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Mock data
  const summaryData = {
  totalEarnings: "₹10,20,000",
  completedRides: 89,
  driverEarnings: "₹8,16,000",
  platformEarnings: "₹2,04,000",
  comparison: "+18% from last month",
};


  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [2023, 2022, 2021];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Earnings Summary</h1>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button className="btn btn-primary">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="day">Daily</option>
            <option value="week">Weekly</option>
            <option value="month">Monthly</option>
            <option value="year">Yearly</option>
          </select>
        </div>
        {timeRange === "month" && (
          <div className="grid grid-cols-2 gap-4">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {months.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Total Earnings
              </h3>
              <div className="p-2 rounded-full bg-blue-100">
                <DollarSign className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold text-gray-900">
                {summaryData.totalEarnings}
              </p>
              <p className="text-sm text-green-600 mt-1">
                {summaryData.comparison}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Completed Rides
              </h3>
              <div className="p-2 rounded-full bg-green-100">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold text-gray-900">
                {summaryData.completedRides}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Driver Earnings
              </h3>
              <div className="p-2 rounded-full bg-purple-100">
                <User className="h-5 w-5 text-purple-500" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold text-gray-900">
                {summaryData.driverEarnings}
              </p>
              <p className="text-sm text-gray-500 mt-1">80% of total</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">
                Platform Earnings
              </h3>
              <div className="p-2 rounded-full bg-yellow-100">
                <DollarSign className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-semibold text-gray-900">
                {summaryData.platformEarnings}
              </p>
              <p className="text-sm text-gray-500 mt-1">20% of total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="card mb-8">
        <div className="card-spacing">
          <EarningsChart timeRange={timeRange} />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <div className="card-spacing">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Driver
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ride ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2023-06-{10 + item}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {
                        [
                          "Michael Johnson",
                          "Sarah Williams",
                          "David Brown",
                          "Emma Davis",
                          "Robert Wilson",
                        ][item - 1]
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      RD-00{item}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${45 + item * 5}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="badge-completed">Paid</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="text-sm font-medium text-blue-600 hover:text-blue-900">
              View all transactions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsSummary;
