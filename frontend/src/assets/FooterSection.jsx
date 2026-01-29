import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react"; // Use icons for a cleaner look
import "./Footer.css";

function Footer() {
  const whatsappNumber = "918053966706";
 // 1. FOR THE BUTTON (Direct link to your business)
const navigationUrl = "https://www.google.com/maps/dir//Jai+Shree+Shyam+Bhavishya+Crane+parts+%26+services+QQPP%2BX2R+Sampla,+Gijhi,+Haryana+124501/@28.7770932,76.7725838,17z/";

// 2. FOR THE IFRAME (The official embed format)
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.643794326573!2d76.7700088755026!3d28.7770979755866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d9f00058a6007%3A0xd6b65e51f061a4f2!2sJai%20Shree%20Shyam%20Bhavishya%20Crane%20parts%20%26%20services!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          {/* 1. Company Info */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-logo mb-3">
              JAI SHREE SHYAM{" "}
              <span className="text-warning">BHAVISHAY CRANES</span>
            </h4>
            <p className="text-muted">
              Leading provider of crane services, Hydra rentals, and genuine
              machine parts across all districts of Haryana.
            </p>
            <div className="social-links d-flex gap-3 mt-3">
              <a href="#" className="text-muted">
                <Facebook size={20} />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="text-success"
              >
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-danger">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links - Cleaned up with React Router Link */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <Link
                  to="/"
                  className="text-muted text-decoration-none d-block mb-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/parts"
                  className="text-muted text-decoration-none d-block mb-2"
                >
                  Parts Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/rental-rates"
                  className="text-muted text-decoration-none d-block mb-2"
                >
                  Rental Rates
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted text-decoration-none d-block mb-2"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted text-decoration-none d-block mb-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Our Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white fw-bold mb-4">Our Services</h6>
            <ul className="list-unstyled footer-links text-muted">
              <li className="mb-2">Repair & Maintenance</li>
              <li className="mb-2">Hydra Rental (Haryana)</li>
              <li className="mb-2">Vehicle Service</li>
              <li className="mb-2">Hydraulic Piping</li>
            </ul>
          </div>

          {/* 4. Contact Details */}
          {/* 4. Contact Details & Map */}
          <div className="col-lg-4 col-md-6">
            <h6 className="text-white fw-bold mb-4">Find Our Workshop</h6>
            <div className="contact-info">
              <p className="mb-3">
                <strong className="text-warning">📍 Address:</strong>
                <br />
                Sampla, Rohtak, Haryana - 124501
              </p>

              {/* Google Maps Embed */}
             <div className="col-lg-6 mb-4">
            <h5 className="mb-3">Find Our Workshop</h5>
            <div className="rounded overflow-hidden shadow-sm" style={{ height: "200px", border: "1px solid #444" }}>
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Footer Office Map"
              ></iframe>
            </div>
            <a href={navigationUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-warning mt-2 w-100">
              Get Directions
            </a>
          </div>
              {/* Add this inside your contact-info div, right under the footer-map div */}
              <div className="mt-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=QQPP+X2R Jai Shree Shyam Bhavishya Crane parts & services, Sampla, Gijhi, Haryana 124501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-warning w-100 fw-bold d-flex align-items-center justify-content-center gap-2"
                >
                  <span>📍</span> Get Directions
                </a>
              </div>

              <div className="mt-3">
                <p className="mb-1 small">📞 +91 8053966706</p>
                <p className="small">✉️ info@jssbcranes.com</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5 border-secondary opacity-25" />

        <div className="row pb-4">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-muted">
              &copy; 2026 JSSB CRANE SERVICES. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 text-muted">
              Reliable Crane Solutions in Sampla
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
