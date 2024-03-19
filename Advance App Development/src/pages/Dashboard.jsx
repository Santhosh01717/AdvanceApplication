import React, { useState } from 'react';
// import Sidebar from './Sidebar';
import './Dashboard.css';
import { PieChart as MUIPieChart } from '@mui/x-charts/PieChart'; 
import AdminSidebar from './AdminSidebar';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {




  // Pagination

 const nav = useNavigate();
  const handleBack = () =>{
    nav("/home");
  }

  return (
    <div className='user-dash'>
      {/* <Sidebar /> */}
      <AdminSidebar />
      <div className='user-dashboard'>
        <div className='top'>
          <h3 className='hello-user'>
          </h3>
          <button className='new-loan-button' onClick={handleBack}>Back</button>
        </div>
        <div className='overview'>
          <div className='total'>
            <img src='https://thumbs.dreamstime.com/b/icon-loan-borrow-loan-253393673.jpg' alt='Loan Icon' />
            <h3>All Events</h3>
            
          </div>
          <div className='total'>
            <img src='https://cdn-icons-png.flaticon.com/512/314/314420.png' alt='Repayments Icon' />
            <h3>Upcoming Events</h3>
            
          </div>
          <div className='total'>
            <img src='https://png.pngtree.com/png-vector/20190726/ourmid/pngtree-package-pending-icon-for-your-project-png-image_1599195.jpg' alt='Pending Icon' />
            <h3>Live Events</h3>
            
          </div>
        </div>
        <div className='user-details'>
          <div className='flex'>
            <h2>Total Events</h2>
            <div className='total-loans'>
              
                <div className='user-loan' >
                  <div className='loan-details'>
                    <h4>EventID: 1</h4>
                    <h4>Event Type: </h4>
                  </div>
                  <div className='loan-details'>
                    <h4>Event location</h4>
                    
                  </div>
                  <button className='view-details-button' onClick={() => handleViewDetails(loan)}>View Details</button>
                </div>
              
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;