package com.example.gymserver.services;

import com.example.gymserver.mappers.UserMapper;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.dto.UserIdDTO;
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
    public UserIdDTO signUp(UserDTO user){
        
        User res = this.userRepository.findUserByUserName(user.getUserName()).orElse(null);
        UserIdDTO userIdDTO = new UserIdDTO();
        if(res == null){
            User newUser = UserMapper.toUser(user);
            this.userRepository.save(newUser);
            userIdDTO.setUserId(newUser.getId());
            userIdDTO.setRole("Trainee");
        }else{
            userIdDTO.setStatusCode(UserService.WRONG_USERNAME_STATUS_CODE);
        }
        return userIdDTO;
    }

}
