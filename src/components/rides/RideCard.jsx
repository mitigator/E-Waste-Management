import {
  Truck,
  User,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import RideStatusBadge from "../common/RideStatusBadge";

const RideCard = ({ ride }) => {
  const statusIcons = {
    assigned: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    "in-progress": <Clock className="h-5 w-5 text-blue-500" />,
    completed: <CheckCircle className="h-5 w-5 text-green-500" />,
  };

  return (
    <div className="card card-hover">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-100">
              {statusIcons[ride.status] || (
                <Truck className="h-5 w-5 text-gray-500" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Ride {ride.id}
              </h3>
              <div className="flex items-center mt-1">
                <RideStatusBadge status={ride.status} />
                <span className="ml-3 text-sm text-gray-600">
                  Booking: {ride.bookingId}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-start">
            <User className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Driver</p>
              <p className="font-medium">{ride.driver.name}</p>
            </div>
          </div>

          <div className="flex items-start">
            <User className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Customer</p>
              <p className="font-medium">{ride.customer}</p>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Pickup</p>
              <p className="font-medium">{ride.pickupAddress}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <div className="flex items-center">
                <RideStatusBadge status={ride.status} />
                {ride.eta && (
                  <span className="ml-2 text-sm font-medium text-gray-900">
                    ETA: {ride.eta}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {(ride.startTime || ride.fare) && (
          <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            {ride.startTime && (
              <div>
                <p className="text-sm text-gray-500">Start Time</p>
                <p className="font-medium">{ride.startTime}</p>
              </div>
            )}
            {ride.endTime && (
              <div>
                <p className="text-sm text-gray-500">End Time</p>
                <p className="font-medium">{ride.endTime}</p>
              </div>
            )}
            {ride.fare && (
              <div>
                <p className="text-sm text-gray-500">Fare</p>
                <p className="font-medium">{ride.fare}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RideCard;
