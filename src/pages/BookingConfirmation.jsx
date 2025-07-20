import { Truck, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingConfirmation = () => {
  // Mock data
  const booking = {
    id: 'BK-789',
    driver: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    eta: '20 mins',
    fare: '₹150',
    status: 'Driver En Route',
    address: '123 Main St, Bangalore',
    wasteType: 'Electronics',
    date: '2023-06-20',
    time: '10:00 AM'
  };
  

  return (
    <div className="container mx-auto px-4 py-6 max-w-md">
      <div className="card p-6 mb-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Pickup Scheduled</h1>
          <p className="text-gray-600">Booking ID: {booking.id}</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-3">
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="font-medium">{booking.driver}</h2>
              <p className="text-sm text-gray-600">Driver</p>
            </div>
          </div>
          <a href={`tel:${booking.phone}`} className="btn btn-secondary">
            <Phone className="h-4 w-4 mr-2" />
            Call
          </a>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">ETA</span>
            <span className="font-medium flex items-center">
              <Clock className="h-4 w-4 mr-2 text-yellow-500" />
              {booking.eta}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Fare</span>
            <span className="font-medium">{booking.fare}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status</span>
            <span className="font-medium text-blue-600">{booking.status}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-medium mb-2 flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            Pickup Location
          </h3>
          <p className="text-gray-600">{booking.address}</p>
        </div>
      </div>

      <div className="card p-6 mb-6">
        <h2 className="font-medium mb-4">Booking Details</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Date & Time</span>
            <span>{booking.date} at {booking.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">E-Waste Type</span>
            <span>{booking.wasteType}</span>
          </div>
        </div>
      </div>

      <Link to="/" className="btn btn-primary w-full">
        Back to Home
      </Link>
    </div>
  );
};

export default BookingConfirmation;