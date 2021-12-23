package com.example.gymserver.services;

import com.example.gymserver.controllers.UserController;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignUpService {

    private UserRepository userRepository;

    @Autowired
    public SignUpService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /*
    * @param userDTO
    * @return id of new user and -1 in case this user name already exists
    */
    public Long signUp(UserDTO user){
        User res = this.userRepository.findUserByUserName(user.getUserName()).orElse(null);
        System.out.println("jojio");
        if(res==null){
            this.userRepository.save(res);
        }else{
            return -1L;
        }
        return res.getId();
    }

}
