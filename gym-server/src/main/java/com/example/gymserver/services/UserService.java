package com.example.gymserver.services;

import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {
    public final static String USER_NOT_FOUND_MESSAGE = "User not found!";
    public final static int USER_NOT_FOUND_STATUS_CODE = -1;
    public final static int WRONG_PASSWORD_STATUS_CODE = -2;
    public final static int WRONG_ANSWER_STATUS_CODE = -3;

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO getUserInfo(Long id){
        return null;
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

        if(!user.getBirth_date().equals(updatedUser.getBirth_date()))
            updatedUser.setBirth_date(user.getBirth_date());

        if(!user.getPhoneNumber().equals(updatedUser.getPhoneNumber()))
            updatedUser.setPhoneNumber(user.getPhoneNumber());

        if(!user.getQuestion().equals(updatedUser.getQuestion()))
            updatedUser.setQuestion(user.getQuestion());

        if(!user.getAnswer().equals(updatedUser.getAnswer()))
            updatedUser.setAnswer(user.getAnswer());

    }
}
