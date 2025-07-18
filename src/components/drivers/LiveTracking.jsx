import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Truck, Clock, User, Phone, MapPin } from "lucide-react";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix leaflet's default icon path issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LiveTracking = () => {
  const [activeDriver, setActiveDriver] = useState(null);
  const [driverPosition, setDriverPosition] = useState([51.505, -0.09]); // Default position (London)
  const [zoom] = useState(13);

  // Mock data for active rides
  const activeRides = [
    {
      id: "RD-001",
      driver: {
        id: "DR-001",
        name: "Michael Johnson",
        phone: "+1 (555) 123-4567",
      },
      booking: {
        id: "BK-001",
        customer: "John Smith",
        pickupAddress: "123 Main St, City",
        dropAddress: "E-Waste Facility A",
      },
      status: "in-progress",
      position: [51.505, -0.09],
      lastUpdated: "2 minutes ago",
    },
    {
      id: "RD-002",
      driver: {
        id: "DR-002",
        name: "Sarah Williams",
        phone: "+1 (555) 234-5678",
      },
      booking: {
        id: "BK-002",
        customer: "Sarah Johnson",
        pickupAddress: "456 Oak Ave, Town",
        dropAddress: "E-Waste Facility B",
      },
      status: "in-progress",
      position: [51.51, -0.1],
      lastUpdated: "5 minutes ago",
    },
  ];

  // Simulate driver movement
  useEffect(() => {
    if (!activeDriver) return;

    const interval = setInterval(() => {
      setDriverPosition((prev) => [
        prev[0] + (Math.random() * 0.001 - 0.0005),
        prev[1] + (Math.random() * 0.001 - 0.0005),
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeDriver]);

  const handleDriverSelect = (driver) => {
    setActiveDriver(driver);
    setDriverPosition(driver.position);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Live Driver Tracking
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 h-[500px]">
          <div className="card h-full">
            <MapContainer
              center={driverPosition}
              zoom={zoom}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "0.375rem",
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {activeRides.map((ride) => (
                <Marker
                  key={ride.id}
                  position={ride.position}
                  eventHandlers={{
                    click: () => handleDriverSelect(ride),
                  }}
                >
                  <Popup>
                    <div className="text-sm">
                      <p className="font-medium">{ride.driver.name}</p>
                      <p>Booking: {ride.booking.id}</p>
                      <p>Status: {ride.status}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {activeDriver && (
                <Marker position={driverPosition}>
                  <Popup>
                    <div className="text-sm">
                      <p className="font-medium">{activeDriver.driver.name}</p>
                      <p>Last updated: {activeDriver.lastUpdated}</p>
                    </div>
                  </Popup>
                </Marker>
              )}
            </MapContainer>
          </div>
        </div>

        {/* Driver Details */}
        <div className="lg:col-span-1">
          <div className="card">
            <div className="card-spacing">
              <h2 className="text-xl font-semibold mb-4">Active Rides</h2>

              {activeRides.length > 0 ? (
                <div className="space-y-4">
                  {activeRides.map((ride) => (
                    <div
                      key={ride.id}
                      className={`p-4 rounded-md cursor-pointer ${
                        activeDriver?.id === ride.id
                          ? "bg-blue-50 border border-blue-200"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => handleDriverSelect(ride)}
                    >
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-blue-100 mr-3">
                          <Truck className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">
                            {ride.driver.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Booking: {ride.booking.id}
                          </p>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{ride.lastUpdated}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No active rides currently</p>
                </div>
              )}

              {activeDriver && (
                <div className="mt-8 border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Driver Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <User className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Driver</p>
                        <p className="font-medium">
                          {activeDriver.driver.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">
                          {activeDriver.driver.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">
                          Current Location
                        </p>
                        <p className="font-medium">
                          Lat: {driverPosition[0].toFixed(6)}, Lng:{" "}
                          {driverPosition[1].toFixed(6)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div>
                        <p className="text-sm text-gray-500">Booking</p>
                        <p className="font-medium">{activeDriver.booking.id}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Customer: {activeDriver.booking.customer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
