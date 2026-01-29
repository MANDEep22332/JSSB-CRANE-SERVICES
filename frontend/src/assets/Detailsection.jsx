import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "Repair & Maintenance",
    desc: "Complete diagnostic and mechanical repair services to minimize your machine's downtime.",
    icon: "🛠️",
  },
  {
    title: "Hydra for Rent (Haryana)",
    desc: "12T to 25T Hydra cranes available for rent across all Haryana districts with experienced operators.",
    icon: "🏗️",
  },
  {
    title: "Vehicle Service",
    desc: "Specialized maintenance for crane carriers, trucks, and heavy-duty industrial vehicles.",
    icon: "🚜",
  },
  {
    title: "Genuine Spare Parts",
    desc: "A massive inventory of certified parts for all major crane and machinery brands.",
    icon: "⚙️",
  },
  {
    title: "Machine Piping",
    desc: "Expert installation and repair of hydraulic pipes and high-pressure system lines.",
    icon: "🚿",
  },
];

function Services() {
  return (
    <section className="services-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">OUR SERVICES</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className={`service-card ${service.title.includes("Rent") ? "highlight-border" : ""}`}
              key={index}
            >
              <div className="card h-100 service-card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-3">{service.icon}</div>
                  <h4 className="card-title fw-bold">{service.title}</h4>
                  <p className="card-text text-muted">{service.desc}</p>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="btn btn-link text-warning text-decoration-none fw-bold p-0"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="p-4 bg-dark text-white rounded-3 shadow">
              <h4 className="fw-bold mb-2">
                📍 Serving All Districts of Haryana
              </h4>
              <p className="mb-0 text-light opacity-75">
                Gurugram • Faridabad • Panipat • Sonipat • Rohtak • Hisar •
                Karnal • Rewari
              </p>
              <div className="mt-3">
                <span className="badge bg-warning text-dark me-2">
                  24/7 Support
                </span>
                <span className="badge bg-warning text-dark">
                  On-Site Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
