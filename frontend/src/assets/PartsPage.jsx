import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PartsPage.css";
import { MessageCircle, Plus, Trash2 } from "lucide-react";
function PartsPage() {
  const [parts, setParts] = useState([]);
  const [newPart, setNewPart] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
  });

  // 1. GET ADMIN STATUS FROM LOCALSTORAGE
  const userRole = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const isAdmin = userRole === "admin";

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/parts`);
        setParts(response.data);
      } catch (error) {
        console.error("Error fetching parts:", error);
      }
    };
    fetchParts();
  }, []);

  const addPart = async (e) => {
    e.preventDefault();

    // Safety check
    if (!token) return alert("You must be logged in as admin to add parts.");

    const partData = { ...newPart };

    try {
      // 2. SEND THE TOKEN IN THE HEADER (Crucial for your backend)
      const response = await axios.post(`${API_URL}/api/parts`, partData, {
        headers: { authorization: token },
      });

      setParts([response.data, ...parts]);
      setNewPart({ name: "", category: "", price: "", image: null }); // Reset form
      alert("Part added successfully to MongoDB!");
    } catch (error) {
      console.error("Error saving part:", error);
      alert(error.response?.data?.message || "Failed to save part");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPart({ ...newPart, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container py-5 mt-5">
      <h2 className="fw-bold mb-4">
        Inventory <span className="text-warning">Management</span>
      </h2>

      {/* 3. CONDITIONAL RENDERING: Only show form if user is Admin */}
      {isAdmin ? (
        <div className="card p-4 mb-5 shadow-sm border-0 bg-light border-start border-warning border-4">
          <h5 className="mb-3 fw-bold">🛠️ Admin Panel: Add New Spare Part</h5>
          <form
            onSubmit={addPart}
            className="row g-3 p-3 bg-white rounded shadow-sm"
          >
            <div className="col-md-3">
              <label className="form-label small fw-bold">Part Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Hydraulic Pump"
                value={newPart.name}
                onChange={(e) =>
                  setNewPart({ ...newPart, name: e.target.value })
                }
                required
              />
            </div>
            <div className="col-md-2">
              <label className="form-label small fw-bold">Category</label>
              <input
                list="category-options"
                className="form-control"
                placeholder="Select"
                value={newPart.category}
                onChange={(e) =>
                  setNewPart({ ...newPart, category: e.target.value })
                }
              />
              <datalist id="category-options">
                <option value="Hydraulic Pipes" />
                <option value="Gears & Motors" />
                <option value="Crane Structure" />
                <option value="Hydra Rental" />
              </datalist>
            </div>
            <div className="col-md-2">
              <label className="form-label small fw-bold">Price (₹)</label>
              <input
                type="number"
                className="form-control"
                placeholder="0.00"
                value={newPart.price}
                onChange={(e) =>
                  setNewPart({ ...newPart, price: e.target.value })
                }
              />
            </div>
            <div className="col-md-3">
              <label className="form-label small fw-bold">Part Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <button
                type="submit"
                className="btn btn-warning w-100 fw-bold py-2"
              >
                Save Part
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="alert alert-secondary mb-5">
          ℹ️ Log in as <strong>Admin</strong> to manage inventory and add new
          parts.
        </div>
      )}

      {/* Display Parts Gallery (Visible to Everyone) */}
      <div className="row g-4">
        {parts.map((part) => (
          <div className="col-md-3" key={part._id || part.id}>
            <div className="card h-100 part-card border-0 shadow-sm">
              <img
                src={part.image || "https://placehold.co/400x300?text=No+Image"}
                className="card-img-top p-3 rounded"
                alt={part.name}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h6 className="fw-bold mb-1">{part.name}</h6>
                <span className="badge bg-secondary mb-2">{part.category}</span>
                <p className="text-primary fw-bold">
                  ₹{part.price || "Contact for Price"}
                </p>

                {/* --- ADD THIS WHATSAPP BUTTON --- */}
                <a
                  href={`https://wa.me/918168339350?text=I am interested in: ${part.name} (Category: ${part.category})`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success btn-sm w-100 mt-auto fw-bold d-flex align-items-center justify-content-center gap-2"
                >
                  <MessageCircle size={16} />
                  Inquire Price
                </a>
                {/* --------------------------------- */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartsPage;
