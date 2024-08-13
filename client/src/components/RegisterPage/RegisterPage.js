import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './RegisterPage.css';
import { useState } from 'react';
import axios from 'axios';

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitData = (e) => {
    const formData = {
      username: username,
      email:email,
      password: password
    };
    axios.post('http://localhost:3005/register', formData)
      .then(response => {
        console.log('Data sent successfully');
        // Do something with the response if needed
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };



  return (
    <div className="RegisterPage-Body">
      <div className="register-container">
        <h2>Create User</h2>
        <form className="register-form" onSubmit={submitData}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} value={username}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        {/* Link the "Already Registered" button to the / route */}
        <Link to="/" className="already-registered-button">Already Registered</Link>
      </div>
    </div>
  );
}
