import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FLogin.css"; // Import the custom CSS

const FLogin = () => {
  const navigate = useNavigate();
  const [aUser, setAuser] = useState({
    uname: "",
    pswd: "",
  });

  const adminLogin = (e) => {
    e.preventDefault();
    let uname = aUser.uname;
    let pwd = aUser.pswd;
    if (uname === "Admin" && pwd === "admin@123") {
      navigate("/admin_dashboard");
    } else alert("Invalid Admin credentials, please check the username / password");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h5>Freelancer Login</h5>
        <form onSubmit={adminLogin}>
          <label>Username</label>
          <input
            type="text"
            name="aUser"
            className="login-input"
            required
            onChange={(e) => {
              setAuser({ ...aUser, uname: e.target.value });
            }}
          />
          <label>Password</label>
          <input
            type="password"
            name="pswd"
            className="login-input"
            required
            onChange={(e) => {
              setAuser({ ...aUser, pswd: e.target.value });
            }}
          />
          <input type="submit" value="Login" className="login-btn" />
        </form>
      </div>
    </div>
  );
};

export default FLogin;
