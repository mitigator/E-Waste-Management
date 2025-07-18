import {
  Truck,
  Phone,
  Mail,
  Star,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import DriverStatusBadge from "../common/DriverStatusBadge";

const DriverCard = ({ driver }) => {
  const statusIcons = {
    available: <CheckCircle className="h-5 w-5 text-green-500" />,
    busy: <Clock className="h-5 w-5 text-yellow-500" />,
    offline: <XCircle className="h-5 w-5 text-red-500" />,
  };

  return (
    <div className="card card-hover">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-100">
              <Truck className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {driver.name}
              </h3>
              <div className="flex items-center mt-1">
                <DriverStatusBadge status={driver.status} />
                <div className="flex items-center ml-3">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="ml-1 text-sm text-gray-600">
                    {driver.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button className="btn btn-primary">View Details</button>
            <button className="btn btn-warning">Edit</button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{driver.phone}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{driver.email}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Truck className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Vehicle</p>
              <p className="font-medium">
                {driver.vehicleType} ({driver.vehicleNumber})
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div>
              <p className="text-sm text-gray-500">Total Earnings</p>
              <p className="font-medium">{driver.earnings}</p>
              <p className="text-xs text-gray-500 mt-1">
                {driver.totalRides} rides
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
