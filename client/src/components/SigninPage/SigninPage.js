import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SigninPageStyle.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SigninPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  
  // const navigateToHome = () => {
  //   const history = useNavigate();
  //   history.push('/home');
  // };
  const submitData = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:3005/signin', {
            username: username,
            password: password
        });

        if (response.data.msg === "user matched") {
            setStatus("success");
            navigate('/home');
            
        } else {
            setStatus("error");
        }
    } catch (error) {
        console.error('Error signing in:', error);
        setStatus("error");
    }
};

  return (

    <div className="SigninPage-body">
      <div className="signin-container">
        <h2>Sign In</h2>
        <form className="signin-form" onSubmit={submitData}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} value={username}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        {status === "success" && <div className="success">Sign-in successful!<Link to="/home" className="create-user-button">Enter in website</Link></div>}
        {status === "error" && <div className="error">Error signing in. Please try again.</div>}
        {/* Link the "Create User" button to the /register route */}
        <Link to="/register" className="create-user-button">Create User</Link>
      </div>
    </div>
  );
}
