package com.example.gymserver.controllers;

import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sign-up")
public class SignUpController {

    private final SignUpService signUpService;

    @Autowired
    public SignUpController(SignUpService signUpService) {
        this.signUpService = signUpService;
    }
    

    /**
     * 
     * @param user
     * @return userId if username is valid
     *         -1 if username exists
     */
    @PostMapping("/trainee")
    public long signUp(@RequestBody UserDTO user){
        return signUpService.signUp(user);
    }

}
