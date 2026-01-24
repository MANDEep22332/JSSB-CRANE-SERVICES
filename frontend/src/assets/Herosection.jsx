import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-container">
      <div className="container">
        <div className="row align-items-center min-vh-75 py-5">
          {/* Left part: Content */}
          <div className="col-lg-6 text-white">
            <h1 className="display-3 fw-bold mb-3">
              JAI SHREE SHYAM{" "}
              <span className="text-warning">BHAVISHAY CRANE SERVICES</span>
            </h1>
            <p className="lead mb-4">
              Premium crane services, inspections, and a massive inventory of
              genuine spare parts for all major brands. Keeping your project
              moving safely.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Link
                to="/services"
                className="btn btn-warning btn-lg px-4 fw-bold"
              >
                Explore Services
              </Link>
              <Link
                to="/parts"
                className="btn btn-outline-light btn-lg px-4 fw-bold"
              >
                Find Parts
              </Link>
            </div>
          </div>

          {/* Right part: Can be left empty or used for a floating image/form */}
          <div className="col-lg-6 d-none d-lg-block text-center">
            {/* You can place a secondary image here or leave it empty to let the background show */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
