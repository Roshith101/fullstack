package com.eventmanagement.roshith.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventmanagement.roshith.model.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}
