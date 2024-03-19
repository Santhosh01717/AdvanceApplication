// AddEventPage.js

import React, { useState, useEffect } from 'react';
import EventsList from './EventsList';
import './AddEvent.css';

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
const handleDeleteAll = () =>{
  localStorage.clear();
  window.location.reload(); 
} 
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
  };

  return (
    <>
      <div className="add-event-title" style={{}}>Events</div>
      <EventsList events={events} />
      <button onClick={handleDeleteAll} style={{width: "100px",height:"30px",backgroundColor: "red",color: "white",marginTop:"40px",border: "none",borderRadius:"10px"}}>Delete All</button>
      
      </>
  );
}

export default AddEventPage;
