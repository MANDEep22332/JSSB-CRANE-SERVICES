import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import OfficeMap from './OfficeMap';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({ 
    name: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false); // New state for success message
  
  const location = useLocation();
  const targetMobileNumber = "918168339350"; 

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedService = params.get('service');

    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        message: `I am interested in learning more about your ${selectedService} service.`
      }));
    }
  }, [location]);

  // Unified change handler to ensure text updates correctly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const text = `*New Inquiry from Website*\n\n*Name:* ${formData.name}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${targetMobileNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
    // for the succes message 
    setSubmitted(true);
    setFormData({ name: '', message: '' });

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-white mb-4 text-center fw-bold">Send an Inquiry</h2>
          <OfficeMap/>
          <form className="bg-dark p-4 rounded shadow border border-secondary" onSubmit={handleWhatsAppSend}>
            
            <div className="mb-3">
              <label className="text-white mb-2">Your Name</label>
              <input 
                type="text" 
                name="name" // Important: must match key in formData
                className="form-control" 
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="text-white mb-2">Message</label>
              <textarea 
                name="message" // Important: must match key in formData
                className="form-control" 
                rows="5"
                required
                placeholder="How can we help you?"
                value={formData.message} 
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="btn btn-warning w-100 fw-bold py-2" type="submit">
              🚀 Send via WhatsApp
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;