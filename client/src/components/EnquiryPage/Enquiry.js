import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Enquiry.css';
import axios from 'axios';


export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [interests, setInterests] = useState("");

  const submitData = (e) => {
    const formData = {
      name: name,
      email: email,
      age: age,
      phoneNumber: phoneNumber,
      address: address,
      interests: interests
    };
    axios.post('http://localhost:3005/enquiry', formData)
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
        <h2>Create Enquiry</h2>
        <p>Fill out the form to get a call from our side</p>
        <form className="register-form" onSubmit={submitData}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" onChange={(e) => setAge(e.target.value)} value={age} />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="number" id="phoneNumber" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" onChange={(e) => setAddress(e.target.value)} value={address} />
          </div>
          <div className="form-group">
            <label htmlFor="interests">Interests:</label>
            <input type="text" id="interests" name="interests" onChange={(e) => setInterests(e.target.value)} value={interests} />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
}
