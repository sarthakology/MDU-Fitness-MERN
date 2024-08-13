import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    
    const submitData = (e) => {
        const formData = {
          name: name,
          lname: lname,
          email: email,
          phone: phone,
        };
        axios.post('http://localhost:3002/register', formData)
          .then(response => {
            console.log('Data sent successfully');
            // Do something with the response if needed
          })
          .catch(error => {
            console.error('Error sending data:', error);
          });
      };



  return (
    <div className='mx-3 text-light'>
        <form className="row g-3" onSubmit={submitData}>

        <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Name</label>
            <input type="text" className="form-control bg-dark text-light" id="inputEmail4" onChange={(e) => setName(e.target.value)} value={name}/>
        </div>

        <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Last Name</label>
            <input type="text" className="form-control bg-dark text-light" id="inputPassword4"onChange={(e) => setLname(e.target.value)} value={lname}/>
        </div>
        <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control bg-dark text-light" id="inputEmail4" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Phone No.</label>
            <input type="number" className="form-control bg-dark text-light" id="inputEmail4" onChange={(e) => setPhone(e.target.value)} value={phone}/>
        </div>



        <div className="col-12">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label className="form-check-label" htmlFor="invalidCheck"/>
                <a href="#" className="text-light">Agree to terms and conditions</a> 
            <label/>
            <div className="invalid-feedback">
                You must agree before submitting.
            </div>
            </div>
        </div>
        <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
        </form>
    </div>
  )
}
