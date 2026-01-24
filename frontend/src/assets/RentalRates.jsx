import React from 'react';
import './RentalRates.css';

function RentalRates() {
  const rates = [
    { machine: "12 Ton Hydra Crane", daily: "₹4,500", monthly: "₹85,000", operator: "Included" },
    { machine: "14 Ton Hydra Crane", daily: "₹5,500", monthly: "₹1,05,000", operator: "Included" },
    { machine: "20 Ton Farana Crane", daily: "₹8,000", monthly: "₹1,60,000", operator: "Included" },
    { machine: "Mobile Crane (High Reach)", daily: "Contact Us", monthly: "Contract Based", operator: "Certified" }
  ];

  return (
    <div className="rental-page mt-5 pt-5">
      <div className="container py-5">
        <h2 className="fw-bold text-center mb-2">RENTAL <span className="text-warning">RATES</span></h2>
        <p className="text-center text-muted mb-5">Transparent pricing for Haryana Industrial Projects</p>

        <div className="table-responsive shadow-sm rounded">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>Machine Description</th>
                <th>Daily Rate (8 hrs)</th>
                <th>Monthly Rate</th>
                <th>Operator</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((item, index) => (
                <tr key={index}>
                  <td className="fw-bold">{item.machine}</td>
                  <td>{item.daily}</td>
                  <td className="text-primary fw-bold">{item.monthly}</td>
                  <td><span className="badge bg-light text-dark border">{item.operator}</span></td>
                  <td>
                    <a href="https://wa.me/918168339350" className="btn btn-sm btn-outline-success">Book Now</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-3 bg-light border-start border-warning border-4">
          <small className="text-muted">
            * Rates are subject to change based on site location in Haryana (Sonipat, Panipat, etc.). 
            Fuel charges are usually extra. Please contact us for a formal quotation.
          </small>
        </div>
      </div>
    </div>
  );
}

export default RentalRates;