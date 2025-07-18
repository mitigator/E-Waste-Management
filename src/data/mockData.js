export const drivers = [
  {
    id: 'DR-001',
    name: 'Michael Johnson',
    email: 'michael@example.com',
    phone: '+1 (555) 123-4567',
    licenseNumber: 'DL12345678',
    vehicleType: 'Pickup Truck',
    vehicleNumber: 'ABC123',
    rating: 4.8,
    status: 'available',
    totalRides: 142,
    earnings: '$8,742',
    joinedDate: '2022-03-15',
    location: { lat: 51.505, lng: -0.09 }
  },
  // ... more driver data
];

export const bookings = [
  {
    id: 'BK-001',
    customerId: 'CUST-001',
    customerName: 'John Smith',
    customerPhone: '+1 (555) 987-6543',
    pickupAddress: '123 Main St, City',
    dropAddress: 'E-Waste Facility A',
    scheduledDate: '2023-06-15',
    scheduledTime: '10:00 AM',
    ewasteType: 'Electronics',
    estimatedWeight: '15 kg',
    status: 'pending',
    driverId: null,
    fare: '$45.00',
    createdAt: '2023-06-10 09:30 AM'
  },
  // ... more booking data
];

export const rides = [
  {
    id: 'RD-001',
    bookingId: 'BK-001',
    driverId: 'DR-001',
    driverName: 'Michael Johnson',
    customerName: 'John Smith',
    pickupAddress: '123 Main St, City',
    dropAddress: 'E-Waste Facility A',
    startTime: '2023-06-15 10:15 AM',
    endTime: '2023-06-15 11:30 AM',
    duration: '1h 15m',
    distance: '8.5 km',
    fare: '$45.00',
    status: 'completed',
    eta: null,
    currentLocation: { lat: 51.505, lng: -0.09 }
  },
  // ... more ride data
];

export const earnings = [
  {
    id: 'ERN-001',
    driverId: 'DR-001',
    rideId: 'RD-001',
    amount: 45.00,
    commission: 9.00,
    netAmount: 36.00,
    date: '2023-06-15',
    status: 'paid'
  },
  // ... more earnings data
];