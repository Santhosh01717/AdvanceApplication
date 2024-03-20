import React from 'react';
import './Login.css'; // Make sure to import your CSS file
import Nav from '../pages/Nav';
import { useNavigate } from 'react-router-dom';

function AdminLoginForm() {
  const nav = useNavigate();
  const handleLogin = () =>{
        nav("/login");
  }
  const handleNav = () =>{
        nav("/adminhome");
  }
  return (
    <>
    
  {/* Created By CodingNepal */}
  <meta charSet="utf-8" />
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <div className="content">
    <div className="text">Admin Login</div>
    <form action="#">
      <div className="field">
        <input type="text" placeholder="Email Or Phone" required="" />
        {/* <span className="fas fa-user" /> */}
        <label>Email or Phone</label>
      </div>
      <div className="field">
        <input type="text" placeholder='Password' required="" />
        {/* <span className="fas fa-lock" /> */}
        <label>Password</label>
      </div>
      <div className="forgot-pass">
        <a href="#">Forgot Password?</a>
      </div>
      <button className='log-button' onClick={handleNav}>Sign in</button>
      <div className="sign-up">
        Are u Organizer
        <a onClick={handleLogin}>Organizer</a>
      </div>
    </form>
  </div>
</>

  );
}

export default AdminLoginForm;
