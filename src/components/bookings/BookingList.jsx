import { useState } from "react";
import BookingCard from "./BookingCard";
import EmptyState from "../common/EmptyState";
import { ClipboardList, Filter, Plus } from "lucide-react";

const BookingList = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const bookings = [
    {
      id: "BK-001",
      customer: "John Smith",
      pickupAddress: "123 Main St, City",
      dropAddress: "E-Waste Facility A",
      scheduledDate: "2023-06-15",
      scheduledTime: "10:00 AM",
      status: "pending",
      ewasteType: "Electronics",
      estimatedWeight: "15 kg",
    },
    {
      id: "BK-002",
      customer: "Sarah Johnson",
      pickupAddress: "456 Oak Ave, Town",
      dropAddress: "E-Waste Facility B",
      scheduledDate: "2023-06-15",
      scheduledTime: "02:30 PM",
      status: "assigned",
      ewasteType: "Batteries",
      estimatedWeight: "8 kg",
    },
    {
      id: "BK-003",
      customer: "Mike Williams",
      pickupAddress: "789 Pine Rd, Village",
      dropAddress: "E-Waste Facility A",
      scheduledDate: "2023-06-16",
      scheduledTime: "09:00 AM",
      status: "in-progress",
      ewasteType: "Appliances",
      estimatedWeight: "25 kg",
    },
    {
      id: "BK-004",
      customer: "Emma Brown",
      pickupAddress: "321 Elm St, City",
      dropAddress: "E-Waste Facility C",
      scheduledDate: "2023-06-16",
      scheduledTime: "11:45 AM",
      status: "completed",
      ewasteType: "Electronics",
      estimatedWeight: "12 kg",
    },
    {
      id: "BK-005",
      customer: "David Wilson",
      pickupAddress: "654 Maple Dr, Town",
      dropAddress: "E-Waste Facility B",
      scheduledDate: "2023-06-17",
      scheduledTime: "03:15 PM",
      status: "cancelled",
      ewasteType: "Other",
      estimatedWeight: "5 kg",
    },
  ];

  const filteredBookings = bookings.filter((booking) => {
    const matchesFilter = filter === "all" || booking.status === filter;
    const matchesSearch =
      booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.customer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "pending", label: "Pending" },
    { value: "assigned", label: "Assigned" },
    { value: "in-progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Bookings Management
        </h1>
        <button className="btn btn-success mt-4 md:mt-0">
          <Plus className="h-4 w-4 mr-2" />
          New Booking
        </button>
      </div>

      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search bookings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Bookings List */}
      {filteredBookings.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {filteredBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No bookings found"
          description="Try adjusting your search or filter criteria"
          icon={<ClipboardList className="mx-auto h-12 w-12 text-gray-400" />}
        />
      )}
    </div>
  );
};

export default BookingList;
