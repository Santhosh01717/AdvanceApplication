// Nav.js

import React, { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import './Nav.css';
import logo from '../images/yatra.png'
import AddEvent from './AddEvent';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    const getMode = localStorage.getItem('mode');
    if (getMode && getMode === 'dark-mode'){
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('mode', darkMode ? 'light-mode' : 'dark-mode');
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    
  };  

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
    const body = document.querySelector('body');
    body.classList.toggle('active', sidebarActive); // Toggle 'active' class on body
  };

  const closeSidebar = () => {
    setSidebarActive(false);
    const body = document.querySelector('body');
    body.classList.remove('active'); // Remove 'active' class on body
  };

  return (
    <div style={{marginBottom: "10px"}}>
      {/* <AddEvent /> */}
      <nav className={sidebarActive ? 'active' : ''}>
        <div className={`nav-bar ${sidebarActive ? 'active' : ''}`}>
          <i className='bx bx-menu sidebarOpen' onClick={toggleSidebar}></i>
            <h4 style={{color: "white",fontWeight: "1000",fontSize: "30px"}}>EventPro</h4>
          <span className='logo navLogo'>
          {/* <img style={{width: "70px", height: "auto", marginRight: "5px",marginTop: "-30px"}} src={logo}></img> */}
          </span>

          <div className='menu'>
            <div className='logo-toggle'>
              <span className='logo'>
                <a href='#'>CodingLab</a>
              </span>
              <i className='bx bx-x siderbarClose' ></i>
            </div>

            <ul className='nav-links'>
              <li>
                <Link to="/home">
                <a>
                  Home
                  </a>
                </Link>
              </li>
              <li>
              <Link to="/dashboard">
                <a>Dashboard</a>
                </Link>
              </li>
              <li>
              <Link to="/userview">
                <a>Events</a>
                </Link>
              </li>
              <li>
              <Link to="/userallbookings">
                <a>Bookings</a>
                </Link>
              </li>
              <li>
              <Link to="/paymentlist">
                <a>Payment</a>
                </Link>
              </li>
              <li>
              <Link to="/adminhome">
                <a>Admin</a>
                </Link>
              </li>
              <li>
              <Link to="/login">
                <a>Logout</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='darkLight-searchBox'>

            <div className='searchBox' style={{display: "flex"}}>
                <input type='text' className="search-button-style" placeholder='Search...'></input>
              <div className='searchToggle'>
                <i className='bx bx-x cancel'></i>
                <i className='bx bx-search search'></i>
              </div>

              <div className={`search-field ${searchActive ? 'active' : ''}`}>
                <i className='bx bx-search'></i>
                <input type='text' placeholder='Search...'></input>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
