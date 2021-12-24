package com.example.gymserver.services;

import Mappers.UserMapper;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {
    public final static String USER_NOT_FOUND_MESSAGE = "User not found!";
    public final static int WRONG_USERNAME_STATUS_CODE = -1;
    public final static int WRONG_PASSWORD_STATUS_CODE = -2;
    public final static int WRONG_ANSWER_STATUS_CODE = -3;

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO getUserProfile(Long id, String userName){
        User user = this.userRepository.findById(id).orElse(null);
        if(user == null)
            return null;
        if(!authenticateUser(id, userName))
            return null;
        return UserMapper.toUserDto(user);
    }

    public boolean authenticateUser(Long id, String userName){
        User user = this.userRepository.findById(id).orElse(null);
        if(user == null)
            return false;
        return user.getId() == id;
    }

    @Transactional
    public void updateUserInfo(UserDTO user){
        User updatedUser = this.userRepository.findUserByUserName(user.getUserName()).orElse(null);
        if(!user.getFirstName().equals(updatedUser.getFirstName()))
            updatedUser.setFirstName(user.getFirstName());

        if(!user.getLastName().equals(updatedUser.getLastName()))
            updatedUser.setLastName(user.getLastName());

        if(!user.getPassword().equals(updatedUser.getPassword()))
            updatedUser.setPassword(user.getPassword());

//        if(!user.getBirth_date().equals(updatedUser.getBirth_date()))
//            updatedUser.setBirth_date(user.getBirth_date());

        if(!user.getPhoneNumber().equals(updatedUser.getPhoneNumber()))
            updatedUser.setPhoneNumber(user.getPhoneNumber());

        if(!user.getQuestion().equals(updatedUser.getQuestion()))
            updatedUser.setQuestion(user.getQuestion());

        if(!user.getAnswer().equalsIgnoreCase(updatedUser.getAnswer()))
            updatedUser.setAnswer(user.getAnswer());

    }
}
