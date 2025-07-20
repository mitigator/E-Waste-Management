// pages/Home.js
import { Link } from 'react-router-dom';

const ActualHome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">E-Waste Management System</h1>
        <p className="text-lg text-gray-600">Select your role to continue</p>
      </div>
      
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        <Link 
          to="/admin" 
          className="px-8 py-4 bg-blue-600 text-white rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          Admin Portal
        </Link>
        
        <Link 
          to="/user" 
          className="px-8 py-4 bg-green-600 text-white rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors shadow-md"
        >
          User Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ActualHome;