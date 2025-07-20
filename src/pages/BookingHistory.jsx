import { CheckCircle, Clock, XCircle } from 'lucide-react';

const BookingHistory = () => {
  // Mock data
  const bookings = [
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
    },
    {
      id: 'BK-987',
      date: '2023-05-28',
      time: '11:30 AM',
      status: 'completed',
      fare: '₹180',
      driver: 'Neha Gupta',
      wasteType: 'Other'
    }
  ];
  

  const statusIcons = {
    completed: <CheckCircle className="h-4 w-4 text-green-500" />,
    cancelled: <XCircle className="h-4 w-4 text-red-500" />,
    pending: <Clock className="h-4 w-4 text-yellow-500" />
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Booking History</h1>
      
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="card p-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-medium">{booking.date} at {booking.time}</h2>
              <div className="flex items-center">
                {statusIcons[booking.status]}
                <span className={`ml-1 text-sm ${
                  booking.status === 'completed' ? 'text-green-600' :
                  booking.status === 'cancelled' ? 'text-red-600' : 'text-yellow-600'
                }`}>
                  {booking.status}
                </span>
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{booking.wasteType}</span>
              <span className="font-medium">{booking.fare}</span>
            </div>
            
            <div className="text-sm">
              <span className="text-gray-500">Driver: </span>
              <span>{booking.driver}</span>
            </div>
            
            {booking.status === 'pending' && (
              <button 
                className="btn btn-danger w-full mt-3 text-sm"
                onClick={() => alert('Your booking was canceled')}
              >
                Cancel Booking
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingHistory;