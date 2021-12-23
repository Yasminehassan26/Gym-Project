package com.example.gymserver.controllers;

import com.example.gymserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sign-up")
public class SignUpController {

    private final SignUpController signUpController;

    @Autowired
    public SignUpController(SignUpController signUpController) {
        this.signUpController = signUpController;
    }
}
