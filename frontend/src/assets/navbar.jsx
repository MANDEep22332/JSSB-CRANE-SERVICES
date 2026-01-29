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
  {/* Search Bar: Wrapped in a div with vertical margin for mobile spacing */}
  <div className="mx-lg-auto my-3 my-lg-0 flex-column " style={{ maxWidth: "450px", width: "100%" }}>
    <form className="d-flex" role="search">
      <div className="input-group input-group-sm">
        <input
          className="form-control border-secondary text-white"
          type="search"
          placeholder="Search parts..."
          style={{ backgroundColor: "#2c3e50" }}
        />
        <button className="btn btn-warning" type="submit">
          <Search size={16} className="text-dark" />
        </button>
      </div>
    </form>
  </div>

  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
    {/* ... your existing links ... */}
    <li className="nav-item">
      <Link className="nav-link py-2" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link py-2" to="/services">Services</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link py-2" to="/parts">Parts Inventory</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link py-2 me-lg-3" to="/contact">Contact</Link>
    </li>

    {/* WhatsApp Button */}
    <li className="nav-item mt-3 mt-lg-0">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="whatsapp-nav-btn d-flex align-items-center justify-content-center gap-2"
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
