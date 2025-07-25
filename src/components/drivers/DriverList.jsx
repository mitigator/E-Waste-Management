import { useState } from "react";
import DriverCard from "./DriverCard";
import EmptyState from "../common/EmptyState";
import { UserPlus, Filter, Search } from "lucide-react";

const DriverList = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const drivers = [
    {
      id: "DR-001",
      name: "Michael Johnson",
      email: "michael@example.com",
      phone: "+1 (555) 123-4567",
      licenseNumber: "DL12345678",
      vehicleType: "Pickup Truck",
      vehicleNumber: "ABC123",
      rating: 4.8,
      status: "available",
      totalRides: 142,
      earnings: "$8,742",
      joinedDate: "2022-03-15",
    },
    {
      id: "DR-002",
      name: "Sarah Williams",
      email: "sarah@example.com",
      phone: "+1 (555) 234-5678",
      licenseNumber: "DL23456789",
      vehicleType: "Van",
      vehicleNumber: "XYZ789",
      rating: 4.9,
      status: "available",
      totalRides: 189,
      earnings: "$12,345",
      joinedDate: "2021-11-22",
    },
    {
      id: "DR-003",
      name: "David Brown",
      email: "david@example.com",
      phone: "+1 (555) 345-6789",
      licenseNumber: "DL34567890",
      vehicleType: "SUV",
      vehicleNumber: "LMN456",
      rating: 4.5,
      status: "busy",
      totalRides: 97,
      earnings: "$6,543",
      joinedDate: "2023-01-10",
    },
    {
      id: "DR-004",
      name: "Emma Davis",
      email: "emma@example.com",
      phone: "+1 (555) 456-7890",
      licenseNumber: "DL45678901",
      vehicleType: "Pickup Truck",
      vehicleNumber: "PQR789",
      rating: 4.7,
      status: "offline",
      totalRides: 76,
      earnings: "$5,432",
      joinedDate: "2023-02-28",
    },
  ];

  const filteredDrivers = drivers.filter((driver) => {
    const matchesFilter = filter === "all" || driver.status === filter;
    const matchesSearch =
      driver.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statusOptions = [
    { value: "all", label: "All Statuses" },
    { value: "available", label: "Available" },
    { value: "busy", label: "Busy" },
    { value: "offline", label: "Offline" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Drivers Management</h1>
        <button className="btn btn-success mt-4 md:mt-0">
          <UserPlus className="h-4 w-4 mr-2" />
          Add New Driver
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
            placeholder="Search drivers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 rounded-md bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Drivers List */}
      {filteredDrivers.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {filteredDrivers.map((driver) => (
            <DriverCard key={driver.id} driver={driver} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No drivers found"
          description="Try adjusting your search or filter criteria"
        />
      )}
    </div>
  );
};

export default DriverList;
