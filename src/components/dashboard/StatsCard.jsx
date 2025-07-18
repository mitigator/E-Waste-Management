import { ArrowUp, ArrowDown } from "lucide-react";

const StatsCard = ({ title, value, change, trend, icon }) => {
  return (
    <div className="card card-hover">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="p-2 rounded-full bg-gray-100">{icon}</div>
        </div>
        <div className="mt-4 flex items-baseline justify-between">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <span
            className={`ml-2 flex items-center text-sm font-medium ${
              trend === "up" ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend === "up" ? (
              <ArrowUp className="h-4 w-4" />
            ) : (
              <ArrowDown className="h-4 w-4" />
            )}
            <span className="sr-only">
              {trend === "up" ? "Increased" : "Decreased"} by
            </span>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
