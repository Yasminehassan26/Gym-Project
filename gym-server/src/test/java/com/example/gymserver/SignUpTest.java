package com.example.gymserver;

import com.example.gymserver.controllers.SignUpController;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
public class SignUpTest {

    @Autowired
    private SignUpController signUpController ;
    @Autowired
    private UserRepository userRepository ;


    @Test
    public void correctSignup(){
        UserDTO user = new UserDTO();
        user.setUserName("mariam");
        user.setAge(17);
        user.setFirstName("Mariam");
        user.setLastName("Youssry");
        user.setPassword("12345");
        user.setPhoneNumber("0128777878");
        user.setQuestion("What is your favorite color?");
        user.setBirth_date(String.valueOf(LocalDate.parse("2000-07-18")));
        user.setAnswer("green");
        user.setRole("Trainee");
        UserIdDTO userIdDTO = signUpController.signUp(user);
        System.out.println(userIdDTO.toString());
        long correctId = userRepository
                .findUserByUserName(user.getUserName())
                .orElse(new User())
                .getId();
        assertEquals(correctId, userIdDTO.getUserId());
        assertEquals(0,userIdDTO.getStatusCode());
    }

    private UserIdDTO signUpUser(String userName){
        UserDTO user = new UserDTO();
        user.setUserName(userName);
        user.setAge(17);
        user.setBirth_date(String.valueOf(LocalDate.parse("2000-07-18")));
        user.setFirstName("Mariam");
        user.setLastName("Ahmed");
        user.setPassword("12345");
        user.setPhoneNumber("0128777878");
        user.setQuestion("What is your favorite color?");
        user.setAnswer("green");
        user.setRole("Trainee");
        return signUpController.signUp(user);
    }

    @Test
    public void signupWithExistingUserName(){
        String userName = "userName";
        signUpUser(userName);
        long expectedStatusCode = -1;
        long actualStatusCode = signUpUser(userName).getStatusCode();
        assertEquals(expectedStatusCode, actualStatusCode);
    }






}
