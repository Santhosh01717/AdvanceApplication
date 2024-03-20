// AddEventPage.js

import React, { useState, useEffect } from 'react';
import EventsList from './EventsList';
import './AddEvent.css';
import Nav from './Nav';

function AddEventPage() {
  return (
    <>
    <Nav />
    <div className="add-event-container">
      <div className="add-event-title">Make 40% payment</div>
      <form className="add-event-form">
        <input type="number"  className="add-event-input" placeholder="Total Amount" required />
        {/* <input type="date" name="description"  className="add-event-input" placeholder="Submission Date" required /> */}
        <input type="number"  className="add-event-input" placeholder="Amount to be Paid" required />
        <input type="number"  className="add-event-input" placeholder="Balance Amount" required />
        <input type="text" className="add-event-input" placeholder="DD/MM/YYYY & (time)" required />
        <select className='add-event-input'>
          <option>CARD</option>
          <option>UPI</option>
          <option>NET BANKING</option>
        </select>
        <button type="submit" className="add-event-button">Add Event</button>
      </form>
      
      {/* <EventsList events={events} /> */}
    </div>
    </>
  );
}

export default AddEventPage;
