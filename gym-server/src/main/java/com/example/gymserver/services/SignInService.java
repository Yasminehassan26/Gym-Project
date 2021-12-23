package com.example.gymserver.services;

import com.example.gymserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignInService {

    private UserRepository userRepository;

    @Autowired
    public SignInService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
