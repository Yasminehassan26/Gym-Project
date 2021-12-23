package com.example.gymserver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class SignInController {

    private SignInController signInController;

    @Autowired
    public SignInController(SignInController signInController) {
        this.signInController = signInController;
    }

    // "api = /sign-in for sign in"
    // "api = /get-user-question/{userName} for get user question"
    // "api = /"
}
