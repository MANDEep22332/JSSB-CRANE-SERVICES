import React from 'react';
import './ServicesPage.css';

function ServicesPage() {
  const serviceDetails = [
    {
      title: "Hydra Machines for Rent",
      desc: "Heavy-duty 12T to 25T Hydra cranes available for short and long-term rental across all Haryana districts.",
      details: "Available in Sonipat, Panipat, Gurugram, and Faridabad. Includes fuel management and certified operators.",
      icon: "🏗️"
    },
    {
      title: "Repair & Maintenance",
      desc: "Complete mechanical and hydraulic overhauls for all types of construction machinery.",
      details: "Our mobile workshop can reach your site for emergency breakdowns. We specialize in engine tuning and boom repairs.",
      icon: "🛠️"
    },
    {
      title: "Spare Parts & Machine Pipes",
      desc: "Genuine spare parts and high-pressure hydraulic piping for cranes and heavy vehicles.",
      details: "We stock certified gears, filters, and custom-fabricated hydraulic hoses to get your machine back to work fast.",
      icon: "⚙️"
    },
    {
      title: "Vehicle Service",
      desc: "Comprehensive servicing for heavy-duty commercial and construction vehicles.",
      details: "From brake adjustments to transmission servicing, we ensure your fleet meets all safety standards.",
      icon: "🚜"
    }
  ];

  return (
    <div className="services-page">
      {/* Header Section */}
      <div className="services-header text-center text-white d-flex align-items-center justify-content-center">
        <div>
          <h1 className="display-4 fw-bold">OUR <span className="text-warning">EXPERTISE</span></h1>
          <p className="lead">Reliable Industrial Solutions in Haryana</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {serviceDetails.map((service, index) => (
            <div className="col-lg-6" key={index}>
              <div className="card h-100 p-4 border-0 shadow-sm service-detail-card">
                <div className="d-flex align-items-start gap-3">
                  <span className="fs-1">{service.icon}</span>
                  <div>
                    <h3 className="fw-bold">{service.title}</h3>
                    <p className="text-primary fw-bold mb-2">{service.desc}</p>
                    <p className="text-muted small">{service.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Details Section on Services Page */}
        <div className="mt-5 p-5 bg-light rounded-4 border">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="fw-bold mb-3">Ready to Start Your Project?</h2>
              <p className="text-muted">Contact our Haryana head office for Hydra booking, part availability, or emergency repair requests.</p>
              
              <div className="d-flex flex-wrap gap-4 mt-4">
                <div>
                  <h6 className="fw-bold text-uppercase text-muted small">Call for Booking</h6>
                  <p className="fs-5 fw-bold text-primary">+91 8168339350</p>
                </div>
                <div>
                  <h6 className="fw-bold text-uppercase text-muted small">Service Support</h6>
                  <p className="fs-5 fw-bold text-primary">+91 8168339350</p>
                </div>
                <div>
                  <h6 className="fw-bold text-uppercase text-muted small">Our Location</h6>
                  <p className="fs-5 fw-bold">QQPP+X2R Jai Shree Shyam Bhavishya Crane parts & services, Sampla, Gijhi, Haryana 124501</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-center">
               <button className="btn btn-warning btn-lg px-5 fw-bold shadow-sm">Get a Price Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;