package com.controllers;

import com.entity.Contact;
import com.entity.ContactRequest;
import com.entity.UserEmailRequest;
import com.service.ContactService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/create")
    public String createContact(@RequestBody ContactRequest request) {
        return contactService.createContact(request.getContact(), request.getUserEmail());
    }
    
    

    @PostMapping("/user-contacts")
    public List<Contact> getUserContacts(@RequestBody UserEmailRequest request) {
        return contactService.getContactsByUserEmail(request.getUserEmail());
    }
    
    
    
    @PutMapping("/update-contact/{id}")
    public ResponseEntity<Contact> updateContact(@PathVariable Long id, @RequestBody Contact contactDetails) {
        Contact updatedContact = contactService.updateContact(id, contactDetails);
        if (updatedContact != null) {
            return ResponseEntity.ok(updatedContact);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
    //deleting the contact 
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteContact(@PathVariable Long id) {
        if (contactService.deleteContact(id)) {
            return ResponseEntity.ok("{\"message\": \"Deleted successfully\"}"); // Success message
        } else {
            return ResponseEntity.status(404).body("{\"message\": \"Not deleted successfully\"}"); // Error message
        }
    }
    
    

}
