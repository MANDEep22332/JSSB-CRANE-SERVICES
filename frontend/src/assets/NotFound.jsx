import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react'; // Using icons you already have

const NotFound = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-dark text-white text-center">
      <div className="p-5 shadow-lg rounded border-top border-warning border-4" style={{ maxWidth: '500px', background: '#1a1a1a' }}>
        <AlertTriangle size={80} className="text-warning mb-4 animate-bounce" />
        <h1 className="display-1 fw-bold text-warning">404</h1>
        <h2 className="mb-3">Site Under Construction?</h2>
        <p className="text-muted mb-4">
          Oops! The page you are looking for has been moved, removed, or never existed. 
          Let's get your project back on track.
        </p>
        <Link to="/" className="btn btn-warning fw-bold px-4 py-2 d-inline-flex align-items-center gap-2">
          <Home size={18} /> BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;