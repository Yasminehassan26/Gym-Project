package com.example.gymserver;

import com.example.gymserver.controllers.SignUpController;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class SignUpTest {

    @Autowired
    private SignUpController signUpController ;
    @Autowired
    private UserRepository userRepository ;

    @Test
    public void signupWithExistingUserName(){
        UserDTO user = new UserDTO();
        user.setUserName("mariam");
        user.setAge(17);
        user.setBirth_date(null);
        user.setFirstName("Mariam");
        user.setLastName("Ahmed");
        user.setPassword("12345");
        user.setPhoneNumber("0128777878");
        user.setQuestion("What is your favorite color?");
        user.setAnswer("green");
        long expected = -1;
        long actual = signUpController.signUp(user);
        assertEquals(expected, actual);
    }

    @Test
    public void correctSignup(){
        UserDTO user = new UserDTO();
        user.setUserName("mariam7");
        user.setAge(17);
        user.setBirth_date(null);
        user.setFirstName("Mariam");
        user.setLastName("Ahmed");
        user.setPassword("12345");
        user.setPhoneNumber("0128777878");
        user.setQuestion("What is your favorite color?");
        user.setAnswer("green");
        long actual = signUpController.signUp(user);
        long expected = userRepository
                                .findUserByUserName(user.getUserName())
                                .orElse(new User())
                                .getId();
        assertEquals(expected, actual);
    }




}
