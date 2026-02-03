import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // 1. Send credentials to your Backend
      const response = await axios.post('http://localhost:5000/api/login', { email, password });

      // 2. IF SUCCESSFUL: Save the special data to the browser
      // This is exactly where those lines go!
      localStorage.setItem("token", response.data.token);
localStorage.setItem("role", response.data.role);
localStorage.setItem("email", response.data.email);

window.location.href = "/parts";
      // 3. Redirect to the Parts page or Home
      alert("Welcome Admin!");
      navigate('/parts');
      
      // Optional: Refresh the page to update the NavBar
      window.location.reload(); 
      
    } catch (error) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="container mt-5 py-5 text-white">
      <div className="row justify-content-center">
        <div className="col-md-4 p-4 bg-dark border border-warning rounded shadow">
          <h2 className="text-warning text-center mb-4">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="Admin Email" 
              className="form-control mb-3" 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="form-control mb-3" 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button className="btn btn-warning w-100 fw-bold">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;