import React from 'react';
import '../pages/EventCard.css'
function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-details">
        <div><strong>Event Type:</strong> {event.eventType}</div>
        <div><strong>Description:</strong> {event.description}</div>
        <div><strong>Total Package:</strong> {event.totalPackage}</div>
        <div><strong>Participants Count:</strong> {event.participantsCount}</div>
        <div><strong>Charges:</strong> {event.charges}</div>
        <div><button className='edit-btn'>Edit</button><button className='delete-btn'>delete</button></div>
        

      </div>
      <div className="event-image">
        <img src={event.image} alt="Event" />
      </div>
    </div>
  );
}

export default EventCard;