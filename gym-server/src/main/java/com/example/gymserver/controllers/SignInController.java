package com.example.gymserver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/sign-in")
public class SignInController {

    private SignInController signInController;

    @Autowired
    public SignInController(SignInController signInController) {
        this.signInController = signInController;
    }
}
