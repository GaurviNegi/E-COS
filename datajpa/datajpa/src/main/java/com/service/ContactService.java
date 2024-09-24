package com.service;

import com.entity.Contact;
import com.entity.User;
import com.repository.ContactRepository;
import com.repository.UserRepository;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private UserRepository userRepository;

    public String createContact(Contact contact, String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                                   .orElseThrow(() -> new RuntimeException("User not found!"));

        contact.setUser(user);  // Associate the contact with the user
        contactRepository.save(contact);
        return "Contact created successfully!";
    }
    
    
    
    //for getting all the contacts 
    public List<Contact> getContactsByUserEmail(String userEmail) {
        User user = userRepository.findByEmail(userEmail)
                                   .orElseThrow(() -> new RuntimeException("User not found!"));
        return user.getContacts(); // Return the list of contacts for the user
    }
    
    
    //for updating the contact 
    public Contact updateContact(Long id, Contact contactDetails) {
        return contactRepository.findById(id)
            .map(contact -> {
                if (contactDetails.getName() != null) {
                    contact.setName(contactDetails.getName());
                }
                if (contactDetails.getEmail() != null) {
                    contact.setEmail(contactDetails.getEmail());
                }
                if (contactDetails.getPhoneNumber() != null) {
                    contact.setPhoneNumber(contactDetails.getPhoneNumber());
                }
                if (contactDetails.getAddress() != null) {
                    contact.setAddress(contactDetails.getAddress());
                }
                if (contactDetails.getPinCode() != null) {
                    contact.setPinCode(contactDetails.getPinCode());
                }
                return contactRepository.save(contact);
            })
            .orElse(null);
    }
    
    
    //for deleting the contact 

    public boolean deleteContact(Long id) {
        if (contactRepository.existsById(id)) {
            contactRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

}

