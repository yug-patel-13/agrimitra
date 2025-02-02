import React, { useState } from 'react';
import './Login.css';
import axios from "axios";

const Login = ({ setogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [namee, setname] = useState("");
  const [eemail, setemail] = useState("");
  const [ppass, setpass] = useState("");

  const togglePanel = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eemail || !ppass || (isSignUp && !namee)) {
      alert("Please fill out all fields");
      return;
    }

    try {
      // If SignUp: Insert new user into the agritech database
      if (isSignUp) {
        const response = await axios.post('http://localhost:3000/api/agritech', {
          name: namee, 
          email: eemail, 
          password: ppass
        });

        alert('Account created successfully!');
        setname('');
        setemail('');
        setpass('');
      } else {
        // If SignIn: Authenticate user
        const response = await axios.post('http://localhost:3000/api/agritech/authenticate', {
          email: eemail, 
          password: ppass
        });

        if (response.data.success) {
          alert('Logged in successfully!');
          setogin("welcome");
        } else {
          alert('Invalid email or password');
        }
      }
    } catch (error) {
      // If the user is signing up and the email already exists
      if (isSignUp && error.response && error.response.status === 400) {
        alert('User already exists. Please log in.');
      } else {
        alert('Error occurred while processing your request');
      }
    }
  };

  return (
    <>
    <div id='forblur'>
    <div className="login-container">
      <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        <form onSubmit={handleSubmit}>
          <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
          {isSignUp && (
            <input
              type="text"
              placeholder="Name"
              id="nm"
              value={namee}
              onChange={(e) => setname(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            id={isSignUp ? "eml" : "em"}
            value={eemail}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            id={isSignUp ? "pswrd" : "pass"}
            value={ppass}
            onChange={(e) => setpass(e.target.value)}
          />
          <button className="green-button" type="submit" style={{background:"green", color:"white"}}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <button className="toggle-button" onClick={togglePanel} >
          {isSignUp ? 'Already have an account? Sign In' : 'New here? Sign Up'}
        </button>
        {!isSignUp && ( 
          <a href="#footer" className="green-link">Forgot your password?</a>
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;
