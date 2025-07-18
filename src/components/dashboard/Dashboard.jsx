import React, { useState, useEffect } from "react";
import {
  Users,
  Truck,
  Package,
  DollarSign,
  Clock,
  MapPin,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Bell,
  Eye,
  Filter,
  Download,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState("today");

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data for dashboard
  const stats = {
    totalBookings: 1247,
    activeRides: 23,
    availableDrivers: 45,
    totalRevenue: 89500,
    todayBookings: 67,
    completedToday: 52,
    pendingBookings: 15,
    cancelledToday: 2,
  };

  const revenueData = [
    { name: "Jan", revenue: 65000, bookings: 120 },
    { name: "Feb", revenue: 78000, bookings: 150 },
    { name: "Mar", revenue: 82000, bookings: 180 },
    { name: "Apr", revenue: 95000, bookings: 210 },
    { name: "May", revenue: 89500, bookings: 195 },
    { name: "Jun", revenue: 105000, bookings: 230 },
  ];

  const dailyBookings = [
    { time: "06:00", bookings: 5 },
    { time: "08:00", bookings: 12 },
    { time: "10:00", bookings: 18 },
    { time: "12:00", bookings: 25 },
    { time: "14:00", bookings: 22 },
    { time: "16:00", bookings: 15 },
    { time: "18:00", bookings: 8 },
    { time: "20:00", bookings: 4 },
  ];

  const statusDistribution = [
    { name: "Completed", value: 68, color: "#10b981" },
    { name: "In Progress", value: 18, color: "#8b5cf6" },
    { name: "Pending", value: 12, color: "#f59e0b" },
    { name: "Cancelled", value: 2, color: "#ef4444" },
  ];

  const recentBookings = [
    {
      id: "#B001",
      customer: "John Doe",
      location: "Koramangala, Bangalore",
      time: "2 mins ago",
      status: "pending",
      value: "₹450",
    },
    {
      id: "#B002",
      customer: "Sarah Wilson",
      location: "Whitefield, Bangalore",
      time: "5 mins ago",
      status: "assigned",
      value: "₹780",
    },
    {
      id: "#B003",
      customer: "Mike Johnson",
      location: "Indiranagar, Bangalore",
      time: "12 mins ago",
      status: "in-progress",
      value: "₹320",
    },
    {
      id: "#B004",
      customer: "Emily Davis",
      location: "HSR Layout, Bangalore",
      time: "18 mins ago",
      status: "completed",
      value: "₹560",
    },
  ];

  const activeRides = [
    {
      id: "#R001",
      driver: "Rajesh Kumar",
      customer: "John Doe",
      pickup: "Koramangala",
      eta: "15 mins",
      status: "pickup",
    },
    {
      id: "#R002",
      driver: "Priya Sharma",
      customer: "Sarah Wilson",
      pickup: "Whitefield",
      eta: "8 mins",
      status: "transit",
    },
    {
      id: "#R003",
      driver: "Arun Patel",
      customer: "Mike Johnson",
      pickup: "Indiranagar",
      eta: "22 mins",
      status: "assigned",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "urgent",
      message: "Driver Rajesh Kumar needs immediate assistance",
      time: "2 mins ago",
    },
    {
      id: 2,
      type: "info",
      message: "New driver application from Suresh Reddy",
      time: "15 mins ago",
    },
    {
      id: 3,
      type: "success",
      message: "Daily target achieved - 50 bookings completed",
      time: "1 hour ago",
    },
  ];

  const StatCard = ({ title, value, change, icon: Icon, color = "blue" }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p
              className={`text-sm mt-1 flex items-center ${
                change.positive ? "text-green-600" : "text-red-600"
              }`}
            >
              <TrendingUp className="w-4 h-4 mr-1" />
              {change.value}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full bg-${color}-100`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const getStatusBadge = (status) => {
    const badges = {
      pending: "bg-yellow-100 text-yellow-800",
      assigned: "bg-blue-100 text-blue-800",
      "in-progress": "bg-purple-100 text-purple-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
      pickup: "bg-orange-100 text-orange-800",
      transit: "bg-indigo-100 text-indigo-800",
    };
    return badges[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Dashboard Overview
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {currentTime.toLocaleDateString("en-IN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                • {currentTime.toLocaleTimeString("en-IN")}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Bookings"
            value={stats.totalBookings.toLocaleString()}
            change={{ positive: true, value: "+12.5%" }}
            icon={Package}
            color="blue"
          />
          <StatCard
            title="Active Rides"
            value={stats.activeRides}
            change={{ positive: true, value: "+5.2%" }}
            icon={Truck}
            color="green"
          />
          <StatCard
            title="Available Drivers"
            value={stats.availableDrivers}
            change={{ positive: false, value: "-2.1%" }}
            icon={Users}
            color="purple"
          />
          <StatCard
            title="Total Revenue"
            value={`₹${stats.totalRevenue.toLocaleString()}`}
            change={{ positive: true, value: "+18.3%" }}
            icon={DollarSign}
            color="green"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Revenue Trend
              </h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Revenue</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [
                    `₹${value.toLocaleString()}`,
                    "Revenue",
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Daily Bookings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Daily Booking Pattern
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyBookings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="bookings" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution and Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Status Distribution */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Booking Status
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Today's Summary
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Bookings</span>
                <span className="font-medium">{stats.todayBookings}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Completed</span>
                <span className="font-medium text-green-600">
                  {stats.completedToday}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Pending</span>
                <span className="font-medium text-yellow-600">
                  {stats.pendingBookings}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Cancelled</span>
                <span className="font-medium text-red-600">
                  {stats.cancelledToday}
                </span>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Notifications
              </h3>
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start space-x-3"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      notification.type === "urgent"
                        ? "bg-red-500"
                        : notification.type === "success"
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Bookings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Bookings
              </h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Package className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {booking.customer}
                      </p>
                      <p className="text-sm text-gray-500">
                        {booking.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{booking.value}</p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Rides */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Active Rides
              </h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Track All
              </button>
            </div>
            <div className="space-y-4">
              {activeRides.map((ride) => (
                <div
                  key={ride.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{ride.driver}</p>
                      <p className="text-sm text-gray-500">→ {ride.pickup}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {ride.eta}
                    </p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
                        ride.status
                      )}`}
                    >
                      {ride.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
