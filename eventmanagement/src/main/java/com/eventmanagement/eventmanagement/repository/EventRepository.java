package com.eventmanagement.eventmanagement.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.eventmanagement.model.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
}
