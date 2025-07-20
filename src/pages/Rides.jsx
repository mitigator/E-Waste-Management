import { useState } from "react";
import { Truck, Plus, Search, Filter } from "lucide-react";
import RideCard from "../components/rides/RideCard";
import EmptyState from "../components/common/EmptyState";

const Rides = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const rides = [
  {
    id: "RD-001",
    bookingId: "BK-001",
    driverName: "Arun Prakash",
    customerName: "Ravi Kumar",
    pickupAddress: "12, MG Road, Bengaluru",
    dropAddress: "E-Waste Facility A, Peenya Industrial Area, Bengaluru",
    startTime: "2023-06-15 10:15 AM",
    endTime: "2023-06-15 11:30 AM",
    duration: "1h 15m",
    distance: "8.5 km",
    fare: "₹3,750.00",
    status: "completed",
  },
  {
    id: "RD-002",
    bookingId: "BK-002",
    driverName: "Divya Ramesh",
    customerName: "Anjali Menon",
    pickupAddress: "45, Indiranagar 100 Feet Rd, Bengaluru",
    dropAddress: "E-Waste Facility B, Electronic City Phase 1, Bengaluru",
    startTime: "2023-06-15 02:45 PM",
    endTime: null,
    duration: null,
    distance: "12.2 km",
    fare: "₹5,000.00",
    status: "in-progress",
  },
  {
    id: "RD-003",
    bookingId: "BK-003",
    driverName: "Suresh Nair",
    customerName: "Vijay Menon",
    pickupAddress: "78, Jayanagar 4th Block, Bengaluru",
    dropAddress: "E-Waste Facility A, Peenya Industrial Area, Bengaluru",
    startTime: "2023-06-16 09:20 AM",
    endTime: null,
    duration: null,
    distance: "5.8 km",
    fare: "₹2,900.00",
    status: "assigned",
  },
];


  const filteredRides = rides.filter((ride) => {
    const matchesFilter = filter === "all" || ride.status === filter;
    const matchesSearch =
      ride.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.bookingId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.driverName.toLowerCase().includes(searchQuery.toLowerCase());
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

export default Rides;
