package com.service;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.entity.User;
import com.repository.UserRepository;


@Service
public class UserService {
	
    @Autowired
    private UserRepository userRepository;


    //for the register
    public String registerUser(User user) {
//        // Check if user already exists by email
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "User with this email already exists!";
        }

        // Save the new user
        userRepository.save(user);

        return "User registered successfully!";
    }
    
 

    
}

