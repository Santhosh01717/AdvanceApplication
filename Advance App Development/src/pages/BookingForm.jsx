// AddEventPage.js

import React, { useState, useEffect } from 'react';
import EventsList from './EventsList';
import './AddEvent.css';

function AddEventPage() {
  return (
    <div className="add-event-container">
      <div className="add-event-title">Booking</div>
      <form className="add-event-form">
        <input type="text" name="eventType" className="add-event-input" placeholder="Username" required />
        {/* <input type="date" name="description"  className="add-event-input" placeholder="Submission Date" required /> */}
        <input type="text" name="totalPackage"  className="add-event-input" placeholder="DD/MM/YYYY(Event-Date)" required />
        <input type="text" name="participantsCount" className="add-event-input" placeholder="Description" required />
        <input type="number" name="charges"  className="add-event-input" placeholder="head count" required />
        <input type="number" name="image" className="add-event-input" placeholder="Amount" required />
        <button type="submit" className="add-event-button">Add Event</button>
      </form>
      
      {/* <EventsList events={events} /> */}
    </div>
  );
}

export default AddEventPage;
