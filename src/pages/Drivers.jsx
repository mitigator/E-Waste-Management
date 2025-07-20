import { useState } from "react";
import { Users, Plus, Search, Filter } from "lucide-react";
import DriverCard from "../components/drivers/DriverCard";
import EmptyState from "../components/common/EmptyState";

const Drivers = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
 const drivers = [
  {
    id: "DR-001",
    name: "Arun Prakash",
    email: "arun.prakash@example.in",
    phone: "+91 98450 12345",
    licenseNumber: "KA01 20220012345",
    vehicleType: "Pickup Truck",
    vehicleNumber: "KA01 AB 1234",
    rating: 4.8,
    status: "available",
    totalRides: 142,
    earnings: "₹7,54,000",
    joinedDate: "2022-03-15",
  },
  {
    id: "DR-002",
    name: "Divya Ramesh",
    email: "divya.ramesh@example.in",
    phone: "+91 98865 23456",
    licenseNumber: "KA03 20210098765",
    vehicleType: "Van",
    vehicleNumber: "KA03 XY 7890",
    rating: 4.9,
    status: "available",
    totalRides: 189,
    earnings: "₹10,65,000",
    joinedDate: "2021-11-22",
  },
  {
    id: "DR-003",
    name: "Suresh Nair",
    email: "suresh.nair@example.in",
    phone: "+91 97415 34567",
    licenseNumber: "KA05 20230054321",
    vehicleType: "SUV",
    vehicleNumber: "KA05 LM 4567",
    rating: 4.5,
    status: "busy",
    totalRides: 97,
    earnings: "₹5,64,000",
    joinedDate: "2023-01-10",
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
          <Plus className="h-4 w-4 mr-2" />
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
          icon={<Users className="mx-auto h-12 w-12 text-gray-400" />}
        />
      )}
    </div>
  );
};

export default Drivers;
