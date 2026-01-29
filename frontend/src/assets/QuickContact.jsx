import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // Install react-icons

const QuickContact = () => {
  return (
    <div className="fixed-bottom p-3 d-flex flex-column align-items-end" style={{ zIndex: 1050, gap: '10px' }}>
      {/* WhatsApp Button */}
      <a href="https://wa.me/918168339350" 
         className="btn btn-success rounded-circle d-flex align-items-center justify-content-center shadow-lg"
         style={{ width: '55px', height: '55px' }}
         target="_blank">
        <FaWhatsapp size={30} />
      </a>
      
      {/* Direct Call Button */}
      <a href="tel:+918168339350" 
         className="btn btn-warning rounded-circle d-flex align-items-center justify-content-center shadow-lg"
         style={{ width: '55px', height: '55px' }}>
        <FaPhoneAlt size={25} />
      </a>
    </div>
  );
};

export default QuickContact;