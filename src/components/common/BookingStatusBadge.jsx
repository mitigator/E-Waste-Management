const BookingStatusBadge = ({ status }) => {
  const statusClasses = {
    pending: "bg-yellow-100 text-yellow-800",
    assigned: "bg-blue-100 text-blue-800",
    "in-progress": "bg-purple-100 text-purple-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  const statusText = {
    pending: "Pending",
    assigned: "Assigned",
    "in-progress": "In Progress",
    completed: "Completed",
    cancelled: "Cancelled",
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

export default BookingStatusBadge;
