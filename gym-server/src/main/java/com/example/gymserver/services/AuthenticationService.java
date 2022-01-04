package com.example.gymserver.services;

import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    public final static int UNAUTHENTICATED_USER_STATUS_CODE = -100;
    private UserRepository userRepository;

    @Autowired
    public AuthenticationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean authenticateUser(Long id, String userName){
        User user = this.userRepository.findUserByUserName(userName).orElse(null);
        if(user == null)
            return false;
        return user.getId().equals(id);
    }


}
