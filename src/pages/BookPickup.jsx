import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Phone, User,CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from '../components/common/Modal';

const BookPickup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    wasteType: 'electronics'
  });

  

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const wasteTypes = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'batteries', label: 'Batteries' },
    { value: 'appliances', label: 'Appliances' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-md">
      <div className="flex items-center mb-6">
        <Link to="/user" className="mr-4">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-xl font-bold">Schedule Pickup</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label className="form-label">Your Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input pl-10"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input pl-10"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Pickup Address</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="form-input pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label className="form-label">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="form-input pl-10"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="form-input pl-10"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Type of E-Waste</label>
          <select
            name="wasteType"
            value={formData.wasteType}
            onChange={handleChange}
            className="form-input"
          >
            {wasteTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-6">
          Confirm Pickup
        </button>
      </form>

      <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} title="Booking Confirmed">
        <div className="text-center py-4">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Pickup Scheduled!</h3>
          <p className="mt-2 text-sm text-gray-500">
            Your e-waste pickup has been scheduled successfully. Booking ID: BK-789
          </p>
          <div className="mt-6">
            <Link to="/booking-confirmation" className="btn btn-primary">
              Track Pickup
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookPickup;