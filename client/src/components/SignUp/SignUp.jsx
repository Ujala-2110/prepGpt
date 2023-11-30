import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from "react";
import './signUp.css'

export default function SignUp() {

  const navigate = useNavigate();

  const [username , setUsername] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        console.log("Sign-up successful");
      } else {
        console.error("Sign-up failed");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }

    navigate('/login');
  };

  return (
    <div className="contain">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input onChange={(e)=> setUsername(e.target.value)} type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input onChange={(e)=> setEmail(e.target.value)} type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="accnt">Already have an account ? <Link className='log' to= '/login' >Login</Link></div>
      </div>
    </div>
  );
}
