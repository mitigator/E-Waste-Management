import {
  Truck,
  Calendar,
  User,
  MapPin,
  Package,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import BookingStatusBadge from "../common/BookingStatusBadge";

const BookingCard = ({ booking }) => {
  const statusIcons = {
    pending: <Clock className="h-5 w-5 text-yellow-500" />,
    assigned: <Truck className="h-5 w-5 text-blue-500" />,
    "in-progress": <Truck className="h-5 w-5 text-purple-500" />,
    completed: <CheckCircle className="h-5 w-5 text-green-500" />,
    cancelled: <XCircle className="h-5 w-5 text-red-500" />,
  };

  return (
    <div className="card card-hover">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-100">
              {statusIcons[booking.status] || (
                <Package className="h-5 w-5 text-gray-500" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {booking.id}
              </h3>
              <BookingStatusBadge status={booking.status} />
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="btn btn-primary mr-2">View Details</button>
            {booking.status === "pending" && (
              <button className="btn btn-success">Assign Driver</button>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-start">
            <User className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Customer</p>
              <p className="font-medium">{booking.customer}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Scheduled</p>
              <p className="font-medium">
                {booking.scheduledDate} at {booking.scheduledTime}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Pickup</p>
              <p className="font-medium">{booking.pickupAddress}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Package className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">E-Waste</p>
              <p className="font-medium">
                {booking.ewasteType} ({booking.estimatedWeight})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
