package com.example.gymserver.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService{
    private AuthenticationService authenticationService;

    @Autowired
    public BookingService(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }
    
}
