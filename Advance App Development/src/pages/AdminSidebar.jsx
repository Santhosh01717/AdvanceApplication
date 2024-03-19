import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';
import Nav from './Nav1';

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'show' : ''}`} style={{backgroundColor: "black"}}>
        <Nav />
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Link to="/hh">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/view">All Events</Link>
      <Link to="/add">Add Events</Link>
      <Link to="/allbookings">All Bookings</Link>
    </div>
  );
}

export default AdminSidebar;