import { useState } from "react";
import {
  User,
  Phone,
  Calendar,
  Clock,
  MapPin,
  Package,
  Truck,
  DollarSign,
  AlertCircle,
  CheckCircle,
  X,
  Edit,
  Printer,
} from "lucide-react";
import BookingStatusBadge from "../common/BookingStatusBadge";
import Modal from "../common/Modal";

const BookingDetails = ({ bookingId, onClose }) => {
  // Mock data - in a real app this would come from an API
 const booking = {
  id: bookingId || "BK-001",
  customer: "Ramesh Iyer",
  customerPhone: "+91 98765 43210",
  customerEmail: "ramesh.iyer@example.in",
  pickupAddress: "12, MG Road, Bengaluru, Karnataka 560001",
  dropAddress: "E-Waste Facility A, 45 Industrial Layout, Peenya, Bengaluru",
  scheduledDate: "2023-06-15",
  scheduledTime: "10:00 AM",
  status: "pending",
  ewasteType: "Electronics",
  ewasteItems: [
    "2 Laptops",
    "3 Mobile Phones",
    "1 Tablet",
    "5 Cables & Chargers",
  ],
  estimatedWeight: "15 kg",
  specialInstructions: "Please ring the bell twice. Items are in the front veranda.",
  driver: null,
  fare: "₹3,750.00",
  createdAt: "2023-06-10 09:30 AM",
  updatedAt: "2023-06-10 09:30 AM",
};


  const [showAssignDriverModal, setShowAssignDriverModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Mock drivers data
  const drivers = [
    { id: "DR-001", name: "Michael Johnson", status: "available" },
    { id: "DR-002", name: "Sarah Williams", status: "available" },
    { id: "DR-003", name: "David Brown", status: "busy" },
    { id: "DR-004", name: "Emma Davis", status: "available" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="card">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Booking Details
              </h2>
              <p className="text-gray-600">ID: {booking.id}</p>
            </div>
            <div className="flex space-x-2">
              <button className="btn btn-primary">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </button>
              <button
                className="btn btn-warning"
                onClick={() => setShowEditModal(true)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </button>
              <button className="btn btn-danger" onClick={onClose}>
                <X className="h-4 w-4 mr-2" />
                Close
              </button>
            </div>
          </div>

          {/* Status and Actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-4 md:mb-0">
              <BookingStatusBadge status={booking.status} />
              <span className="ml-4 text-gray-600">
                Created: {booking.createdAt}
              </span>
              {booking.updatedAt && (
                <span className="ml-4 text-gray-600">
                  Updated: {booking.updatedAt}
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              {booking.status === "pending" && (
                <button
                  className="btn btn-success"
                  onClick={() => setShowAssignDriverModal(true)}
                >
                  Assign Driver
                </button>
              )}
              {booking.status === "assigned" && (
                <button className="btn btn-primary">Start Ride</button>
              )}
              {booking.status === "in-progress" && (
                <button className="btn btn-success">Complete Ride</button>
              )}
              {(booking.status === "pending" ||
                booking.status === "assigned") && (
                <button className="btn btn-danger">Cancel Booking</button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Customer Info */}
                <div className="card">
                  <div className="card-spacing">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <User className="h-5 w-5 text-blue-500 mr-2" />
                      Customer Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{booking.customer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{booking.customerPhone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{booking.customerEmail}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule Info */}
                <div className="card">
                  <div className="card-spacing">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Calendar className="h-5 w-5 text-purple-500 mr-2" />
                      Schedule
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">{booking.scheduledDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium">{booking.scheduledTime}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Fare</p>
                        <p className="font-medium">{booking.fare}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pickup/Drop Info */}
                <div className="card">
                  <div className="card-spacing">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <MapPin className="h-5 w-5 text-green-500 mr-2" />
                      Locations
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Pickup Address</p>
                        <p className="font-medium">{booking.pickupAddress}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Drop-off Facility
                        </p>
                        <p className="font-medium">{booking.dropAddress}</p>
                      </div>
                      {booking.specialInstructions && (
                        <div>
                          <p className="text-sm text-gray-500">
                            Special Instructions
                          </p>
                          <p className="font-medium italic">
                            {booking.specialInstructions}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* E-Waste Info */}
                <div className="card">
                  <div className="card-spacing">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Package className="h-5 w-5 text-yellow-500 mr-2" />
                      E-Waste Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Type</p>
                        <p className="font-medium">{booking.ewasteType}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          Estimated Weight
                        </p>
                        <p className="font-medium">{booking.estimatedWeight}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Items</p>
                        <ul className="list-disc list-inside font-medium">
                          {booking.ewasteItems.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Driver Assignment */}
            <div className="lg:col-span-1">
              <div className="card">
                <div className="card-spacing">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Truck className="h-5 w-5 text-blue-500 mr-2" />
                    Driver Assignment
                  </h3>
                  {booking.driver ? (
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Assigned Driver</p>
                        <p className="font-medium">{booking.driver.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Driver Status</p>
                        <BookingStatusBadge status={booking.driver.status} />
                      </div>
                      <button className="btn btn-primary w-full">
                        View Driver Details
                      </button>
                      <button className="btn btn-danger w-full">
                        Reassign Driver
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">
                        No driver assigned
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Assign a driver to this booking
                      </p>
                      <div className="mt-6">
                        <button
                          className="btn btn-success w-full"
                          onClick={() => setShowAssignDriverModal(true)}
                        >
                          Assign Driver
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assign Driver Modal */}
      <Modal
        isOpen={showAssignDriverModal}
        onClose={() => setShowAssignDriverModal(false)}
        title="Assign Driver"
        size="md"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Available Drivers
            </label>
            <select className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select a driver</option>
              {drivers
                .filter((driver) => driver.status === "available")
                .map((driver) => (
                  <option key={driver.id} value={driver.id}>
                    {driver.name} ({driver.id})
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estimated Fare
            </label>
            <input
              type="text"
              value="$45.00"
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              readOnly
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={() => setShowAssignDriverModal(false)}
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              Assign Driver
            </button>
          </div>
        </div>
      </Modal>

      {/* Edit Booking Modal */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Booking Details"
        size="lg"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Customer Name
              </label>
              <input
                type="text"
                defaultValue={booking.customer}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Customer Phone
              </label>
              <input
                type="text"
                defaultValue={booking.customerPhone}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Address
            </label>
            <input
              type="text"
              defaultValue={booking.pickupAddress}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                defaultValue={booking.scheduledDate}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                defaultValue={booking.scheduledTime}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-Waste Type
              </label>
              <select
                defaultValue={booking.ewasteType}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Electronics</option>
                <option>Batteries</option>
                <option>Appliances</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Estimated Weight
              </label>
              <input
                type="text"
                defaultValue={booking.estimatedWeight}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Special Instructions
            </label>
            <textarea
              defaultValue={booking.specialInstructions}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={() => setShowEditModal(false)}
              className="btn btn-danger"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookingDetails;
