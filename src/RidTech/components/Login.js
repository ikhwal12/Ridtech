import React, { useState } from "react";
import "../styles/login-style.css";
import { useNavigate } from "react-router-dom";
import logohd from "../assets/logohd.png";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Contoh validasi login
    if (username === "admin" && password === "admin") {
      alert("Login berhasil");
      // Redirect ke halaman dashboard atau halaman berikutnya
      navigate("/dashboard/home");
    } else {
      alert("Login gagal");
    }
  };
  return (
    <div>
      <div className="login-container">
        <div className="login-form">
          <img src={logohd} alt="" className="logohd" />
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginbtn" type="submit">
              Login
            </button>
            <p className="alternative">Don't Have Account?</p>
            <button className="signupbtn" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
