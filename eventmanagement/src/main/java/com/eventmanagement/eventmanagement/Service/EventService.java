package com.eventmanagement.eventmanagement.Service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventmanagement.eventmanagement.model.Event;
import com.eventmanagement.eventmanagement.repository.EventRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event updateEvent(Long id, Event eventDetails) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id " + id));

        event.setEventType(eventDetails.getEventType());
        event.setDescription(eventDetails.getDescription());
        event.setTotalPackage(eventDetails.getTotalPackage());
        event.setParticipantsCount(eventDetails.getParticipantsCount());
        event.setCharges(eventDetails.getCharges());
        event.setImage(eventDetails.getImage());

        return eventRepository.save(event);
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
