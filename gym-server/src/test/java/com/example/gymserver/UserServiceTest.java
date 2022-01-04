package com.example.gymserver;

import com.example.gymserver.controllers.SignUpController;
import com.example.gymserver.controllers.UserController;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.AuthenticationService;
import com.example.gymserver.services.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

@SpringBootTest
public class UserServiceTest {
    @Autowired
    private UserController userController;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SignUpController signUpController;

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    public void getUserProfileWrongUserID() {
        UserIdDTO userIdDTO = new UserIdDTO();
        userIdDTO.setUserId(100);
        UserDTO userDTO = userController.getUserProfile("mariam", userIdDTO);
        assertNull(userDTO);
    }

    @Test
    public void getUserProfileCorrectUserID() {
        User user = userRepository
                .findUserByUserName("mariam")
                .orElse(null);
        long userId = user.getId();
        UserIdDTO userIdDTO = new UserIdDTO();
        userIdDTO.setUserId(userId);
        UserDTO actual = userController.getUserProfile("mariam", userIdDTO);
        assertEquals(user.getUserName(), actual.getUserName());
        assertEquals(user.getFirstName(), actual.getFirstName());
        assertEquals(user.getLastName(), actual.getLastName());
    }

    private int updateUser(String userName,long userId,String newFirstName){
        UserDTO user = new UserDTO();
        user.setUserName(userName);
        user.setUserId(userId);
        user.setAge(17);
        user.setBirth_date(String.valueOf(LocalDate.parse("2000-07-18")));
        user.setFirstName(newFirstName);
        user.setLastName("Ahmed");
        user.setPassword("12345");
        user.setPhoneNumber("0128777878");
        user.setQuestion("What is your favorite color?");
        user.setAnswer("green");
        user.setRole("Trainee");
        return userController.updateUserInfo(user);
    }

    private UserIdDTO signUpUser(String userName){
        UserDTO user = new UserDTO();
        user.setUserName(userName);
        user.setAge(17);
        user.setBirth_date(String.valueOf(LocalDate.parse("2000-07-18")));
        user.setFirstName("FirstName");
        user.setLastName("LasName");
        user.setPassword("12345");
        user.setPhoneNumber("0128777878");
        user.setQuestion("What is your favorite color?");
        user.setAnswer("green");
        user.setRole("Trainee");
        return signUpController.signUp(user);
    }

    @Test
    public void updateUserProfileWrongUserID(){
        String userName = "userName100";
        signUpUser(userName);
        String newFirstName = "newFirstName";
        User user = this.userRepository.findUserByUserName(userName).orElse(null);
        String firstName = user.getFirstName();
        int statusCode = updateUser(userName,user.getId()+1,newFirstName);
        user = this.userRepository.findUserByUserName(userName).orElse(null);

        assertEquals(AuthenticationService.UNAUTHENTICATED_USER_STATUS_CODE,statusCode);
        assertEquals(firstName,user.getFirstName());

    }



    @Test
    public void updateUserProfileCorrectUserID() {
        String userName = "userName200";
        signUpUser(userName);
        String newFirstName = "newFirstName";
        User user = this.userRepository.findUserByUserName(userName).orElse(null);
        String firstName = user.getFirstName();
        int statusCode = updateUser(userName,user.getId(),newFirstName);
        user = this.userRepository.findUserByUserName(userName).orElse(null);
        assertEquals(0,statusCode);
        assertEquals(newFirstName,user.getFirstName());

    }

}
