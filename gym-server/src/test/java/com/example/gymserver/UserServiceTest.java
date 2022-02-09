package com.example.gymserver;

import com.example.gymserver.controllers.SignUpController;
import com.example.gymserver.controllers.UserController;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.mappers.UserMapper;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.AuthenticationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

@SpringBootTest
@ActiveProfiles("test")
public class UserServiceTest {
    @Autowired
    private UserController userController;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SignUpController signUpController;

    private static UserDTO registeredUser;

    private  UserIdDTO signUpUser(String userName, String password){
        registeredUser = new UserDTO();
        registeredUser.setUserName(userName);
        registeredUser.setAge(17);
        registeredUser.setBirth_date(String.valueOf(LocalDate.parse("2000-07-18")));
        registeredUser.setFirstName("Mariam");
        registeredUser.setLastName("Ahmed");
        registeredUser.setPassword(password);
        registeredUser.setPhoneNumber("0128777878");
        registeredUser.setQuestion("What is your favorite color?");
        registeredUser.setAnswer("green");
        registeredUser.setRole("Trainee");
        return signUpController.signUp(registeredUser);
    }


    @BeforeEach
    public void setUp() {
        User user = userRepository
                .findUserByUserName("mariam")
                .orElse(null);

        if( user == null )
            signUpUser("mariam","12345");
        else
            registeredUser = UserMapper.toUserDto(user);
    }

    @Test
    public void getUserProfileWrongUserID() {
        UserIdDTO userIdDTO = new UserIdDTO();
        userIdDTO.setUserId(100);
        UserDTO userDTO = userController.getUserProfile(registeredUser.getUserName(), userIdDTO);
        assertNull(userDTO);
    }

    @Test
    public void getUserProfileCorrectUserID() {
        User user = userRepository
                .findUserByUserName(registeredUser.getUserName())
                .orElse(null);
        long userId = user.getId();
        UserIdDTO userIdDTO = new UserIdDTO();
        userIdDTO.setUserId(userId);
        UserDTO actual = userController.getUserProfile(registeredUser.getUserName(), userIdDTO);
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



    @Test
    public void updateUserProfileWrongUserID(){
        String userName = "userName100";
        signUpUser(userName,"12345");
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
        signUpUser(userName,"12345");
        String newFirstName = "newFirstName";
        User user = this.userRepository.findUserByUserName(userName).orElse(null);
        String firstName = user.getFirstName();
        int statusCode = updateUser(userName,user.getId(),newFirstName);
        user = this.userRepository.findUserByUserName(userName).orElse(null);
        assertEquals(0,statusCode);
        assertEquals(newFirstName,user.getFirstName());

    }

}
