import { useState, useEffect } from "react"; // Added useEffect
import {
  Construction,
  MessageCircle,
  Search,
  User,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import "./navbar.css";

function NavBar() {
  const whatsappNumber = "918168339350";
  const navigate = useNavigate();

  // 1. Create a state for the userEmail
  const [userEmail, setUserEmail] = useState(null);

  // 2. Check localStorage when the component mounts
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUserEmail(null); // Clear the state so the button disappears immediately
    navigate("/"); // Redirect to home
  };

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
            <div
              className="mx-lg-auto my-3 my-lg-0 flex-column "
              style={{ maxWidth: "450px", width: "100%" }}
            >
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
              <li className="nav-item">
                <Link className="nav-link py-2" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2" to="/parts">
                  Parts Inventory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-2 me-lg-3" to="/contact">
                  Contact
                </Link>
              </li>

              {/* Conditional Rendering for Admin Dropdown or Login */}
              {userEmail ? (
                <div className="d-flex align-items-center gap-3 ms-lg-3 mt-3 mt-lg-0">
                  <span className="text-warning small border-end pe-3 border-secondary">
                    {userEmail}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <li className="nav-item mt-3 mt-lg-0">
                  <Link className="nav-link text-muted small" to="/login">
                    Admin Login
                  </Link>
                </li>
              )}
              {/* WhatsApp Button */}
              <li className="nav-item mt-3 mt-lg-0 ms-lg-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="whatsapp-nav-btn d-flex align-items-center justify-content-center gap-2"
                  style={{ textDecoration: "none" }}
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
