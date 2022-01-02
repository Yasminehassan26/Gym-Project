package com.example.gymserver;

import com.example.gymserver.controllers.UserController;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

@SpringBootTest
public class UserServiceTest {
    @Autowired
    private UserController userController;
    @Autowired
    private UserRepository userRepository;

    @Test
    public void getUserProfileWrongUserID() {
        UserIdDTO userIdDTO = new UserIdDTO();
        userIdDTO.setUserId(99);
        UserDTO actual = userController.getUserProfile("mariam", userIdDTO);
        assertNull(actual);
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

    @Test
    public void updateUserProfileWrongUserID(){
        
    }

    @Test
    public void updateUserProfileCorrectUserID() {

    }

}
