import React from 'react';
import './AuthSplit.css'; // Make sure the CSS you provided is imported
import loginImg from '../assets/logo2.png'; // Replace with actual image path

const Login = () => {
  return (
    <div className="auth-split-container">
      <div className="auth-split-left">
        <img src={loginImg} alt="Login Visual" className="auth-split-img" />
      </div>
      <div className="auth-split-right">
        <div className="auth-panel fixed-height">
          <h2 className="auth-title">Login</h2>
          <form className="auth-form">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />

            <button type="submit" className="auth-btn">Log In</button>
          </form>

          <div className="auth-footer">
            Don't have an account?
            <a href="/signup"> Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
