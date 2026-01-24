import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./PartsPage.css";

function PartsPage() {
  const [parts, setParts] = useState([
    {
      id: 1,
      name: "Hydraulic Pump",
      category: "Pipes",
      price: "5500",
      image: "https://via.placeholder.com/150",
    },
  ]);


  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/parts');
        setParts(response.data); // Update state with DB data
      } catch (error) {
        console.error("Error fetching parts from MongoDB:", error);
      }
    };
    fetchParts();
  }, []);


  const addPart = async (e) => {
  e.preventDefault();
  
  const partData = {
    name: newPart.name,
    category: newPart.category,
    price: newPart.price,
    image: newPart.image // For small local testing, use the Base64/Blob URL
  };

  try {
    const response = await axios.post('http://localhost:5000/api/parts', partData);
    setParts([response.data, ...parts]); // Add to screen immediately
    alert("Saved to MongoDB!");
  } catch (error) {
    console.error("Error saving to MongoDB:", error);
  }
};

  

  const [newPart, setNewPart] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
  });



  // Handle Image Upload from Local Computer
  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      // reader.result is the full Base64 string that MongoDB can store forever
      setNewPart({ ...newPart, image: reader.result });
    };
    reader.readAsDataURL(file);
  }
};

  // const addPart = (e) => {
  //   e.preventDefault();
  //   if (!newPart.name || !newPart.image)
  //     return alert("Please add name and image");

  //   setParts([...parts, { ...newPart, id: Date.now() }]);
  //   setNewPart({ name: "", category: "", price: "", image: null }); // Reset form
  // };

  return (
    <div className="container py-5 mt-5">
      <h2 className="fw-bold mb-4">
        Inventory <span className="text-warning">Management</span>
      </h2>

      {/* Form to Add New Parts */}
      <div className="card p-4 mb-5 shadow-sm border-0 bg-light">
        <h5 className="mb-3">Add New Spare Part</h5>
        <form
          onSubmit={addPart}
          className="row g-3 p-3 bg-white rounded shadow-sm"
        >
          {/* 1. Part Name */}
          <div className="col-md-3">
            <label className="form-label small fw-bold">Part Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Hydraulic Pump"
              value={newPart.name}
              onChange={(e) => setNewPart({ ...newPart, name: e.target.value })}
            />
          </div>

          {/* 2. Category (Customizable) */}
          <div className="col-md-2">
            <label className="form-label small fw-bold">Category</label>
            <input
              list="category-options"
              className="form-control"
              placeholder="Type or Select"
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
              <option value="Vehicle Service" />
            </datalist>
          </div>

          {/* 3. Price Section */}
          <div className="col-md-2">
            <label className="form-label small fw-bold">Price (₹)</label>
            <div className="input-group">
              <span className="input-group-text">₹</span>
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
          </div>

          {/* 4. Image Upload */}
          <div className="col-md-3">
            <label className="form-label small fw-bold">Part Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* 5. Submit Button */}
          <div className="col-md-2 d-flex align-items-end">
            <button
              type="submit"
              className="btn btn-warning w-100 fw-bold py-2"
            >
              Add to Inventory
            </button>
          </div>
        </form>
      </div>

      {/* Display Parts Gallery */}
      <div className="row g-4">
        {parts.map((part) => (
          <div className="col-md-3" key={part._id || part.id || Math.random()}>
            <div className="card h-100 part-card border-0 shadow-sm">
           <img
  // 1. Try the DB image. 
  // 2. Fallback to a different placeholder if DB image is empty.
  src={part.image || "https://placehold.co/400x300?text=No+Image"}
  className="card-img-top p-3 rounded"
  alt={part.name}
  style={{ height: "200px", objectFit: "contain" }}
  onError={(e) => {
    // 3. If the link is broken (like your blob error), show this:
    e.target.onerror = null; 
    e.target.src = "https://placehold.co/400x300?text=Image+Error";
  }}
/>
              <div className="card-body text-center">
                <h6 className="fw-bold mb-1">{part.name}</h6>
                <span className="badge bg-secondary mb-2">{part.category}</span>
                <p className="text-primary fw-bold">
                  ₹{part.price || "Contact for Price"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartsPage;
