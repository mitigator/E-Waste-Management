import { CheckCircle, Clock, Truck, User, AlertCircle } from "lucide-react";

const statusIcons = {
  completed: <CheckCircle className="h-5 w-5 text-green-500" />,
  pending: <Clock className="h-5 w-5 text-yellow-500" />,
  "in-progress": <Truck className="h-5 w-5 text-blue-500" />,
  alert: <AlertCircle className="h-5 w-5 text-red-500" />,
};

const statusColors = {
  completed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800",
  alert: "bg-red-100 text-red-800",
};

const RecentActivity = ({ activities }) => {
  return (
    <div className="card">
      <div className="card-spacing">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            Filter
          </button>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className="flex-shrink-0 mr-3 mt-1">
                {statusIcons[activity.status] || (
                  <User className="h-5 w-5 text-gray-500" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.driver}
                </p>
                <p className="text-sm text-gray-500">{activity.action}</p>
                <div className="mt-1">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      statusColors[activity.status] ||
                      "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {activity.status.replace("-", " ")}
                  </span>
                </div>
              </div>
              <div className="ml-3 text-xs text-gray-500 whitespace-nowrap">
                {activity.time}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button className="w-full btn btn-primary">View All Activity</button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
