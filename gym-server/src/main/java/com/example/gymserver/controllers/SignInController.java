package com.example.gymserver.controllers;

import com.example.gymserver.dto.SignInDTO;
import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.SignInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class SignInController {

    private final SignInService signInService;

    public SignInController(SignInService signInService) {
        this.signInService = signInService;
    }

    @GetMapping("/sign-in")
    public Long signIn(@RequestBody SignInDTO signInDTO){
        return this.signInService.signIn(signInDTO.getUserName(),signInDTO.getPassword());
    }

    // "api = /sign-in for sign in"
    // "api = /get-user-question/{userName} for get user question"
    // "api = /"
}
