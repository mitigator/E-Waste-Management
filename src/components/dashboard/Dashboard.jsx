import { useState } from "react";
import StatsCard from "./StatsCard";
import RecentActivity from "./RecentActivity";
import EarningsChart from "./EarningsChart";
import {
  ArrowUp,
  ArrowDown,
  Calendar,
  Users,
  Truck,
  DollarSign,
} from "lucide-react";

const DashboardOverview = () => {
  // Mock data
  const stats = [
    {
      title: "Total Bookings",
      value: "142",
      change: "+12%",
      trend: "up",
      icon: <Calendar className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Active Drivers",
      value: "24",
      change: "+3%",
      trend: "up",
      icon: <Users className="h-5 w-5 text-green-500" />,
    },
    {
      title: "Ongoing Rides",
      value: "8",
      change: "-2%",
      trend: "down",
      icon: <Truck className="h-5 w-5 text-yellow-500" />,
    },
    {
      title: "Total Revenue",
      value: "₹752,907",
      change: "+18%",
      trend: "up",
      icon: <DollarSign className="h-5 w-5 text-purple-500" />,
    },
  ];

 const activities = [
  {
    id: 1,
    driver: "Arun Kumar",
    action: "Picked up e-waste",
    time: "2 mins ago",
    status: "completed",
  },
  {
    id: 2,
    driver: "Divya Ramesh",
    action: "New booking assigned",
    time: "10 mins ago",
    status: "pending",
  },
  {
    id: 3,
    driver: "Praveen Nair",
    action: "Completed ride",
    time: "25 mins ago",
    status: "completed",
  },
  {
    id: 4,
    driver: "Meera Subramanian",
    action: "Started ride",
    time: "1 hour ago",
    status: "in-progress",
  },
];


  const earningsData = [
    { name: "Jan", earnings: 4000 },
    { name: "Feb", earnings: 3000 },
    { name: "Mar", earnings: 5000 },
    { name: "Apr", earnings: 2780 },
    { name: "May", earnings: 1890 },
    { name: "Jun", earnings: 2390 },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your e-waste collection
            today.
          </p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button className="btn btn-primary">Generate Report</button>
          <button className="btn btn-success">New Booking</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Earnings Chart */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="card-spacing">
              <h2 className="text-xl font-semibold mb-4">Monthly Earnings</h2>
              <EarningsChart data={earningsData} />
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-1">
          <RecentActivity activities={activities} />
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="card">
        <div className="card-spacing">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pickup
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Scheduled
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      #{item}245
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Customer {item}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      123 Main St
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Today, 2:00 PM
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item % 3 === 0 ? (
                        <span className="badge-completed">Completed</span>
                      ) : item % 2 === 0 ? (
                        <span className="badge-assigned">Assigned</span>
                      ) : (
                        <span className="badge-pending">Pending</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="text-sm font-medium text-blue-600 hover:text-blue-900">
              View all bookings →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
