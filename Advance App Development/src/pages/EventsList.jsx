// EventsList.js

import React from 'react';
import EventCard from './EventCard';

function EventsList({ events }) {
  return (
    <div className="events-list">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}

export default EventsList;
