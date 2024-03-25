package com.eventmanagement.eventmanagement.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.eventmanagement.model.User;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String username);

}
