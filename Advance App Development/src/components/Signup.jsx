import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const nav = useNavigate();
  const handleSignup = () => {
    nav("/login")
  }
  return (
    <>
  {/* Created By CodingNepal */}
  <meta charSet="utf-8" />
  {/* <title>Neumorphism Login Form UI | CodingNepal</title> */}
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <div className="content">
    <div className="text">Register</div>
    <form action="#">
      <div className="field">
        <input placeholder='Username' type="text" required="" />
        {/* <span className="fas fa-user" /> */}
        <label>Username</label>
      </div>
      <div className="field" style={{marginBottom: "15px"}}>
        <input placeholder='Email' type="text" required="" />
        <label>Email</label>
      </div>
      <div className="field" style={{marginBottom: "15px"}}>
        <input placeholder='password' type="text" required="" />

        <label>Password</label>
      </div>
      <div className="field" style={{marginBottom: "15px"}}>
        <input placeholder='confirm password' type="text" required="" />
        {/* <span className="fas fa-user" /> */}
        <label>confirm password</label>
      </div>
      <div className="field">
        <input placeholder='Mobile No.' type="number" required="" />
        {/* <span className="fas fa-lock" /> */}
        <label>Mobile No</label>
      </div>
      <div className="forgot-pass">
        <a href="#">Forgot Password?</a>
      </div>
      <button onClick={handleSignup} className='log-button'>Register</button>
      <div className="sign-up">
        Already have an account?
        <a onClick={handleSignup}>login now</a>
      </div>
    </form>
  </div>
</>
  )
}

export default Signup