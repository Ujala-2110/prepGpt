import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./login.css";

export default function Login() {

  const navigate = useNavigate();
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();

        localStorage.setItem("token", token);

        console.log("Login successful");

        navigate('/quesans')
      } else {
        console.error("Login failed");
        navigate('/signup');
      }
    } catch (error) {
      console.error("Login error:", error);
    }

  };

  return (
    <div className="logg">
      <div className="login-container">
        <h2 className="hyp">Account Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
