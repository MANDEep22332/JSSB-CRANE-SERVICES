import React from 'react';

const OfficeMap = () => {
  // Navigation link for the button (Opens Google Maps app)
  const navigationUrl = "https://maps.google.com/?cid=15462668218583327986&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl";

  // CORRECT Embed URL for the iframe (No X-Frame-Options error)
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.662137169553!2d76.782448475503!3d28.787492275581176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d9f00058a6007%3A0xd6966ed1f061a4f2!2sJai%20Shree%20Shyam%20Bhavishya%20Crane%20parts%20%26%20services!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <div className="card bg-dark border-secondary shadow-lg overflow-hidden mt-4">
      <div className="card-header bg-warning text-dark fw-bold">
        📍 Visit Our Office: Sampla, Haryana
      </div>
      <div className="card-body p-0" style={{ height: "450px" }}>
        <iframe
          title="Jai Shree Shyam Office Location"
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="card-footer bg-dark text-center py-3">
        <a 
          href={navigationUrl}
          target="_blank" 
          rel="noreferrer"
          className="btn btn-warning w-100 fw-bold"
        >
          🚀 Open in Navigation
        </a>
      </div>
    </div>
  );
};

export default OfficeMap;