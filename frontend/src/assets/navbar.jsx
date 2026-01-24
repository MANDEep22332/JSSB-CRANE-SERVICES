import { useState } from "react";
import { Construction, MessageCircle, Search } from "lucide-react"; // 1. Import MessageCircle
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  // Replace this with your actual WhatsApp number (include 91 for India)
  const whatsappNumber = "918168339350";

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <Construction color="#F39C12" size={32} className="me-2" />
            <span className="fw-bold text-white">JSSB CRANES</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Search Bar */}
            <form
              className="d-flex mx-lg-auto my-2 my-lg-0"
              role="search"
              style={{ maxWidth: "250px", width: "100%" }}
            >
              <input
                className="form-control form-control-sm me-2"
                type="search"
                placeholder="Search parts..."
                aria-label="Search"
              />

              <button className="btn btn-warning" type="submit">
                <Search size={16} className="text-dark" />
              </button>
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/parts">
                  Parts Inventory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link me-lg-3" to="/contact">
                  Contact
                </Link>
              </li>

              {/* 2. WhatsApp Button in Navbar */}
              <li className="nav-item mt-2 mt-lg-0">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello Jai Shree Shyam Cranes, I have a requirement.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-nav-btn d-flex align-items-center gap-2"
                >
                  <MessageCircle size={20} />
                  <span className="fw-bold">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
