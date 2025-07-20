import { useState } from "react";
import {
  Truck,
  User,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Calendar,
  X,
  Printer,
  Package,
} from "lucide-react";
import RideStatusBadge from "../common/RideStatusBadge";

const RideDetails = ({ rideId, onClose }) => {
  // Mock data - in a real app this would come from an API
  const ride = {
  id: rideId || "RD-001",
  bookingId: "BK-001",
  driver: {
    id: "DR-001",
    name: "Arun Prakash",
    phone: "+91 98450 12345",
    vehicleType: "Pickup Truck",
    vehicleNumber: "KA01 AB 1234",
  },
  customer: {
    name: "Ravi Kumar",
    phone: "+91 98765 43210",
    email: "ravi.kumar@example.in",
  },
  pickupAddress: "12, MG Road, Bengaluru, Karnataka 560001",
  dropAddress: "E-Waste Facility A, Peenya Industrial Area, Bengaluru",
  startTime: "2023-06-15 10:15 AM",
  endTime: "2023-06-15 11:30 AM",
  duration: "1 hour 15 minutes",
  distance: "8.5 km",
  fare: "₹3,750.00",
  status: "completed",
  ewasteDetails: [
    {
      type: "Electronics",
      weight: "10 kg",
      items: ["2 Laptops", "3 Mobile Phones"],
    },
    {
      type: "Batteries",
      weight: "5 kg",
      items: ["4 Laptop Batteries", "3 Phone Batteries"],
    },
  ],
  specialInstructions: "Please ring the bell twice. Items are in the veranda.",
  route: [
    {
      time: "10:15 AM",
      location: "Picked up from customer",
      notes: "All items loaded",
    },
    {
      time: "10:45 AM",
      location: "In transit",
      notes: "On route to facility",
    },
    {
      time: "11:30 AM",
      location: "Arrived at facility",
      notes: "Items unloaded and processed",
    },
  ],
};


  return (
    <div className="container mx-auto px-4 py-6">
      <div className="card">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Ride Details</h2>
              <p className="text-gray-600">ID: {ride.id}</p>
            </div>
            <div className="flex space-x-2">
              <button className="btn btn-primary">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </button>
              <button className="btn btn-danger" onClick={onClose}>
                <X className="h-4 w-4 mr-2" />
                Close
              </button>
            </div>
          </div>

          {/* Status and Summary */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-4 md:mb-0">
              <RideStatusBadge status={ride.status} />
              <span className="ml-4 text-gray-600">
                Booking ID: {ride.bookingId}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500">Start Time</p>
                <p className="font-medium">{ride.startTime}</p>
              </div>
              {ride.endTime && (
                <div>
                  <p className="text-sm text-gray-500">End Time</p>
                  <p className="font-medium">{ride.endTime}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium">{ride.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Fare</p>
                <p className="font-medium">{ride.fare}</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Driver Info */}
                <div className="card">
                  <div className="card-spacing">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Truck className="h-5 w-5 text-blue-500 mr-2" />
                      Driver Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{ride.driver.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{ride.driver.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Vehicle</p>
                        <p className="font-medium">
                          {ride.driver.vehicleType} ({ride.driver.vehicleNumber}
                          )
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="card">
                  <div className="card-spacing">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <User className="h-5 w-5 text-purple-500 mr-2" />
                      Customer Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{ride.customer.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{ride.customer.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{ride.customer.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Locations */}
                <div className="card md:col-span-2">
                  <div className="card-spacing">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <MapPin className="h-5 w-5 text-green-500 mr-2" />
                      Locations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Pickup Address</p>
                        <p className="font-medium">{ride.pickupAddress}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Drop-off Facility
                        </p>
                        <p className="font-medium">{ride.dropAddress}</p>
                      </div>
                    </div>
                    {ride.specialInstructions && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">
                          Special Instructions
                        </p>
                        <p className="font-medium italic">
                          {ride.specialInstructions}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* E-Waste Details */}
                <div className="card md:col-span-2">
                  <div className="card-spacing">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Package className="h-5 w-5 text-yellow-500 mr-2" />
                      E-Waste Details
                    </h3>
                    <div className="space-y-4">
                      {ride.ewasteDetails.map((item, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                        >
                          <div className="flex justify-between">
                            <p className="font-medium">{item.type}</p>
                            <p className="text-gray-600">{item.weight}</p>
                          </div>
                          <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                            {item.items.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Ride Timeline */}
            <div className="lg:col-span-1">
              <div className="card">
                <div className="card-spacing">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    Ride Timeline
                  </h3>
                  <div className="space-y-4">
                    {ride.route.map((step, index) => (
                      <div key={index} className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              index === 0
                                ? "bg-blue-500"
                                : index === ride.route.length - 1
                                ? "bg-green-500"
                                : "bg-gray-400"
                            }`}
                          ></div>
                          {index < ride.route.length - 1 && (
                            <div className="w-px h-full bg-gray-300"></div>
                          )}
                        </div>
                        <div className="pb-4">
                          <p className="font-medium text-gray-900">
                            {step.time}
                          </p>
                          <p className="text-gray-600">{step.location}</p>
                          {step.notes && (
                            <p className="text-sm text-gray-500 mt-1">
                              {step.notes}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
