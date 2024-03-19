// AddEventPage.js

import React, { useState, useEffect } from 'react';
import EventsList from './EventsList';
import './AddEvent.css';
import UserEventsList from './UserEventList';
import Nav from './Nav';
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
    <Nav />
      <div className="add-event-title">Events</div>
      <UserEventsList events={events} />
      
      </>
  );
}

export default AddEventPage;
