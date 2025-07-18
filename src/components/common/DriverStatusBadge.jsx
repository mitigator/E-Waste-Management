const DriverStatusBadge = ({ status }) => {
  const statusClasses = {
    available: "bg-green-100 text-green-800",
    busy: "bg-yellow-100 text-yellow-800",
    offline: "bg-gray-100 text-gray-800",
  };

  const statusText = {
    available: "Available",
    busy: "Busy",
    offline: "Offline",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        statusClasses[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {statusText[status] || status}
    </span>
  );
};

export default DriverStatusBadge;
