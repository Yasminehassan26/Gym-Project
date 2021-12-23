package com.example.gymserver.services;

import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO getUserInfo(Long id){
        return null;
    }

    public void updateUserInfo(UserDTO user){

    }
}
