// pages/UserDashboard.js
import { useState } from 'react';
import { Truck, Clock, CheckCircle, XCircle, Plus, Home, Calendar, History, DollarSign, HelpCircle } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const UserDashboard = () => {
  const location = useLocation();
  
  // Mock data
  const pastBookings = [
    {
      id: 'BK-789',
      date: '2023-06-15',
      time: '10:00 AM',
      status: 'completed',
      fare: '₹150',
      driver: 'Rajesh Kumar',
      wasteType: 'Electronics'
    },
    {
      id: 'BK-456',
      date: '2023-06-10',
      time: '02:30 PM',
      status: 'completed',
      fare: '₹200',
      driver: 'Priya Sharma',
      wasteType: 'Appliances'
    },
    {
      id: 'BK-123',
      date: '2023-06-05',
      time: '09:00 AM',
      status: 'cancelled',
      fare: '₹120',
      driver: 'Amit Patel',
      wasteType: 'Batteries'
    }
  ];

  const statusIcons = {
    completed: <CheckCircle className="h-4 w-4 text-green-500" />,
    pending: <Clock className="h-4 w-4 text-yellow-500" />,
    cancelled: <XCircle className="h-4 w-4 text-red-500" />
  };

  const navLinks = [
    { path: "/user", name: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { path: "/book-pickup", name: "Book Pickup", icon: <Calendar className="h-5 w-5" /> },
    { path: "/booking-history", name: "History", icon: <History className="h-5 w-5" /> },
    { path: "/earnings", name: "Payments", icon: <DollarSign className="h-5 w-5" /> },
    { path: "/support", name: "Support", icon: <HelpCircle className="h-5 w-5" /> }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-gray-800">E-Waste User</h1>
          <p className="text-sm text-gray-600">Welcome back!</p>
        </div>
        
        <nav className="p-2">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {location.pathname === "/user" && (
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Welcome, User!</h1>
              <p className="text-gray-600">Ready to schedule an e-waste pickup?</p>
            </div>

            <Link to="/book-pickup" className="btn btn-primary w-full mb-8">
              <Plus className="h-5 w-5 mr-2" />
              Book Pickup Service
            </Link>

            <h2 className="text-xl font-semibold mb-4">Recent Pickups</h2>
            <div className="space-y-3">
              {pastBookings.map((booking) => (
                <div key={booking.id} className="card p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{booking.date} at {booking.time}</p>
                      <p className="text-sm text-gray-600">{booking.wasteType}</p>
                    </div>
                    <div className="flex items-center">
                      {statusIcons[booking.status]}
                      <span className={`ml-2 text-sm ${
                        booking.status === 'completed' ? 'text-green-600' :
                        booking.status === 'cancelled' ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-sm">Driver: {booking.driver}</p>
                    <p className="font-medium">{booking.fare}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboard;