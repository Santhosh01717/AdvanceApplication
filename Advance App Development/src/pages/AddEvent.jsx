// AddEventPage.js

import React, { useState, useEffect } from 'react';
import EventsList from './EventsList';
import './AddEvent.css';
import { useNavigate } from 'react-router-dom';
import Nav from '../pages/Nav'
function AddEventPage() {
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  const [newEvent, setNewEvent] = useState({
    id: '',
    eventType: '',
    description: '',
    totalPackage: '',
    participantsCount: '',
    charges: '',
    image: ''
  });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents(prevEvents => [...prevEvents, newEvent]);
    setNewEvent({
      id: '',
      eventType: '',
      description: '',
      totalPackage: '',
      participantsCount: '',
      charges: '',
      image: ''
    });
    handleEvent();
  };
  

  return (
    <>
    {/* <Nav/> */}
    <div className="add-event-container">
      <div className="add-event-title">Add Event</div>
      <form className="add-event-form" onSubmit={handleSubmit}>
        <input type="text" name="eventType" value={newEvent.eventType} onChange={handleChange} className="add-event-input" placeholder="Event Type" required />
        <input type="text" name="description" value={newEvent.description} onChange={handleChange} className="add-event-input" placeholder="Description" required />
        <input type="text" name="totalPackage" value={newEvent.totalPackage} onChange={handleChange} className="add-event-input" placeholder="Total Package" required />
        <input type="number" name="participantsCount" value={newEvent.participantsCount} onChange={handleChange} className="add-event-input" placeholder="Participants Count" required />
        <input type="text" name="charges" value={newEvent.charges} onChange={handleChange} className="add-event-input" placeholder="Charges" required />
        <input type="url" name="image" value={newEvent.image} onChange={handleChange} className="add-event-input" placeholder="Image URL" required />
        <button type="submit" className="add-event-button">Add Event</button>
      </form>
      
      {/* <EventsList events={events} /> */}
    </div>
    </>
  );
}

export default AddEventPage;
