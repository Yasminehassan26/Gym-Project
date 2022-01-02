package com.example.gymserver.controllers;

import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PutMapping("/profile/{userName}")
    public void updateUserInfo(@RequestBody UserDTO user){
        userService.updateUserInfo(user);
    }
}
