
import React, { useState } from "react";
import './SignupForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/signup', { email,firstName,lastName, password });
      setIsRegistered(true);
    } catch (err) {
      setError('User already exists or database error');
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="input-box">
          <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <FaAt className="icon" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="FirstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="LastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
        {isRegistered && <p className="success-message">Registered successfully! Please proceed to the login page and login</p>}
      </form>
    </div>
  );
}

export default SignupForm;
