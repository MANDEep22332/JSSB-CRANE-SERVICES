import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page mt-5 pt-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">CONTACT <span className="text-warning">US</span></h1>
          <p className="text-muted">Available 24/7 for Emergency Crane Repairs & Hydra Rentals</p>
        </div>

        <div className="row g-5">
          {/* Left Side: Contact Form */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm p-4">
              <h4 className="fw-bold mb-4">Send us a Message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" placeholder="e.g. +91 98XXX XXXXX" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Service Required</label>
                  <select className="form-select">
                    <option>Hydra Rental</option>
                    <option>Machine Repair</option>
                    <option>Spare Parts Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Describe your requirement..."></textarea>
                </div>
                <button className="btn btn-warning w-100 fw-bold py-2">Submit Request</button>
              </form>
            </div>
          </div>

          {/* Right Side: Office Details */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              <div className="contact-item p-3 bg-light rounded d-flex align-items-center gap-3">
                <div className="icon-box bg-warning p-3 rounded">📍</div>
                <div>
                  <h6 className="fw-bold mb-0">Our Office</h6>
                  <p className="mb-0 text-muted">Sampla, Haryana</p>
                </div>
              </div>

              <div className="contact-item p-3 bg-light rounded d-flex align-items-center gap-3">
                <div className="icon-box bg-warning p-3 rounded">📞</div>
                <div>
                  <h6 className="fw-bold mb-0">Call Us Now</h6>
                  <p className="mb-0 text-muted">+91 8168339350, +91 8053966706</p>
                </div>
              </div>

              <div className="contact-item p-3 bg-light rounded d-flex align-items-center gap-3">
                <div className="icon-box bg-warning p-3 rounded">✉️</div>
                <div>
                  <h6 className="fw-bold mb-0">Email Support</h6>
                  <p className="mb-0 text-muted">contact@jaishreeshyamcranes.com</p>
                </div>
              </div>

              {/* Placeholder for Google Maps */}
              <div className="map-placeholder rounded overflow-hidden shadow-sm" style={{height: '250px', background: '#e9ecef'}}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111667.5759160566!2d77.011667!3d28.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00000000000%3A0x0!2zU29uaXBhdA!5e0!3m2!1sen!2sin!4v1700000000000" 
                  width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;