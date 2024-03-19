import React from 'react';
import './AdminOrUser.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const ChooseRolePage = () => {
    const nav = useNavigate();
  const handleAdminClick = () => {
    nav("/login")
    console.log('Admin page selected');
  };

  const handleUserClick = () => {
    // Handle logic for navigating to the user page
    nav("/login")
    console.log('User page selected');
  };

  return (
    <div className="container-adminuser">
      <h1 className="heading-adminuser" style={{color: "black"}}>Choose Your Role</h1>
      <div className="button-container-adminuser">
        <button className="button-adminuser" onClick={handleAdminClick} style={{color: "white"}}>
          Admin
        </button>
        <button className="button-adminuser" onClick={handleUserClick} style ={{color: "white"}}>
          User
        </button>
      </div>
    </div>
  );
};

export default ChooseRolePage;
