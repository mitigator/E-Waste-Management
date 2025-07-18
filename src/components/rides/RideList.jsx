import { useState } from "react";
import RideCard from "./RideCard";
import EmptyState from "../common/EmptyState";
import { Truck, Filter, Search } from "lucide-react";

const RideList = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const rides = [
    {
      id: "RD-001",
      bookingId: "BK-001",
      driver: {
        id: "DR-001",
        name: "Michael Johnson",
      },
      customer: "John Smith",
      pickupAddress: "123 Main St, City",
      dropAddress: "E-Waste Facility A",
      startTime: "2023-06-15 10:15 AM",
      endTime: "2023-06-15 11:30 AM",
      duration: "1h 15m",
      distance: "8.5 km",
      fare: "$45.00",
      status: "completed",
      eta: null,
    },
    {
      id: "RD-002",
      bookingId: "BK-002",
      driver: {
        id: "DR-002",
        name: "Sarah Williams",
      },
      customer: "Sarah Johnson",
      pickupAddress: "456 Oak Ave, Town",
      dropAddress: "E-Waste Facility B",
      startTime: "2023-06-15 02:45 PM",
      endTime: null,
      duration: null,
      distance: "12.2 km",
      fare: "$60.00",
      status: "in-progress",
      eta: "15 minutes",
    },
    {
      id: "RD-003",
      bookingId: "BK-003",
      driver: {
        id: "DR-003",
        name: "David Brown",
      },
      customer: "Mike Williams",
      pickupAddress: "789 Pine Rd, Village",
      dropAddress: "E-Waste Facility A",
      startTime: "2023-06-16 09:20 AM",
      endTime: null,
      duration: null,
      distance: "5.8 km",
      fare: "$35.00",
      status: "assigned",
      eta: "30 minutes",
    },
    {
      id: "RD-004",
      bookingId: "BK-004",
      driver: {
        id: "DR-004",
        name: "Emma Davis",
      },
      customer: "Emma Brown",
      pickupAddress: "321 Elm St, City",
      dropAddress: "E-Waste Facility C",
      startTime: "2023-06-16 11:50 AM",
      endTime: "2023-06-16 12:35 PM",
      duration: "45m",
      distance: "6.2 km",
      fare: "$38.00",
      status: "completed",
      eta: null,
    },
  ];

  const filteredRides = rides.filter((ride) => {
    const matchesFilter = filter === "all" || ride.status === filter;
    const matchesSearch =
      ride.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.bookingId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.customer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "assigned", label: "Assigned" },
    { value: "in-progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Rides Management
      </h1>

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
            placeholder="Search rides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Rides List */}
      {filteredRides.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {filteredRides.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No rides found"
          description="Try adjusting your search or filter criteria"
          icon={<Truck className="mx-auto h-12 w-12 text-gray-400" />}
        />
      )}
    </div>
  );
};

export default RideList;
