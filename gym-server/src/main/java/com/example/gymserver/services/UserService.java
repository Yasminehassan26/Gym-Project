package com.example.gymserver.services;

import com.example.gymserver.dto.ProgramFollowUpDTO;
import com.example.gymserver.dto.SessionDTO;
import com.example.gymserver.mappers.UserMapper;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;

@Service
public class UserService {
    public final static String USER_NOT_FOUND_MESSAGE = "User not found!";
    public final static int WRONG_USERNAME_STATUS_CODE = -1;
    public final static int WRONG_PASSWORD_STATUS_CODE = -2;
    public final static int WRONG_ANSWER_STATUS_CODE = -3;


    private UserRepository userRepository;
    private AuthenticationService authenticationService;

    @Autowired
    public UserService(UserRepository userRepository, AuthenticationService authenticationService) {
        this.userRepository = userRepository;
        this.authenticationService = authenticationService;
    }

    public UserDTO getUserProfile(Long id, String userName){
        User user = this.userRepository.findUserByUserName(userName).orElse(null);
        if(user == null )
            return null;
        if(!authenticationService.authenticateUser(id, userName))
            return null;
        return UserMapper.toUserDto(user);
    }



    @Transactional
    public int updateUserInfo(UserDTO user){
        if(!authenticationService.authenticateUser(user.getUserId(), user.getUserName()))
            return AuthenticationService.UNAUTHENTICATED_USER_STATUS_CODE;

        User updatedUser = this.userRepository.findUserByUserName(user.getUserName()).orElse(null);
        if(!user.getFirstName().equals(updatedUser.getFirstName()))
            updatedUser.setFirstName(user.getFirstName());

        if(!user.getLastName().equals(updatedUser.getLastName()))
            updatedUser.setLastName(user.getLastName());

        if(!user.getPassword().equals(updatedUser.getPassword()))
            updatedUser.setPassword(user.getPassword());

        // if(!user.getBirth_date().equals(updatedUser.getBirth_date()))
        //     updatedUser.setBirth_date(LocalDate.parse(user.getBirth_date()));

        if(!user.getPhoneNumber().equals(updatedUser.getPhoneNumber()))
            updatedUser.setPhoneNumber(user.getPhoneNumber());

        if(!user.getQuestion().equals(updatedUser.getQuestion()))
            updatedUser.setQuestion(user.getQuestion());

        if(!user.getAnswer().equalsIgnoreCase(updatedUser.getAnswer()))
            updatedUser.setAnswer(user.getAnswer());

        return 0;
    }
}
