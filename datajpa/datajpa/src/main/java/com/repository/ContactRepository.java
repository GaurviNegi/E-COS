package com.repository;

import com.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    // Additional query methods can be defined here if needed
}
