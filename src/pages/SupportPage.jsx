import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const SupportPage = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent! We will contact you soon.');
    setFormData({ subject: '', message: '' });
  };

  

  return (
    <div className="container mx-auto px-4 py-6 max-w-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Support</h1>
      
      <div className="card p-6 mb-6">
        <h2 className="font-medium mb-4">Our Information</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-500 mr-3" />
            <span>support@ewastepickup.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-gray-500 mr-3" />
            <span>+91 1800 123 4567</span>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-1" />
            <span>123 Green Tech Park, Bangalore, Karnataka 560001</span>
          </div>
        </div>
      </div>
      
      <div className="card p-6">
        <h2 className="font-medium mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="form-input"
            />
          </div>
          
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;