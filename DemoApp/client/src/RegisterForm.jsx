import axios from "axios";
import React, { useState } from "react";
import "./RegisterForm.css"; // Importing external CSS

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/register", { name, email, phone, location })
      .then((result) => setStatus(result.data))
      .catch((err) => setStatus(err.message));
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h3 className="form-title">Laptop Repair Registration</h3>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" placeholder="Enter your location" onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <button type="submit" className="submit-btn">Sign Up</button>
        <div className="status-message">{status}</div>
      </form>
    </div>
  );
}

export default RegisterForm;
