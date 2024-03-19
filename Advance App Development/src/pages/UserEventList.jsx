// EventsList.js

import React from 'react';
import EventCard from './EventCard';
import UserEventCard from './UserEventCard';

function UserEventsList({ events }) {
  return (
    <div className="events-list">
      {events.map((event, index) => (
        <UserEventCard key={index} event={event} />
      ))}
    </div>
  );
}

export default UserEventsList;
