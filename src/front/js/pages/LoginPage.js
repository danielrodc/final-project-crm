import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/login.css";
import "./home";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if the email and password are correct 
    if (email === "example@example.com" && password === "password") {
      // Successful login, will redirect to a page once it is defined
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;


