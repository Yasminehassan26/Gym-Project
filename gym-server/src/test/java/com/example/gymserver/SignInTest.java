package com.example.gymserver;

import com.example.gymserver.controllers.SignInController;
import com.example.gymserver.dto.SignInDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.UserService;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ActiveProfiles("test")
public class SignInTest {
    private static boolean setUpIsDone = false;

    @BeforeClass
    public void setUp() {
        if (setUpIsDone) {
            return;
        }
        // do the setup
        setUpIsDone = true;
        System.out.println("hi");
    }

    @Autowired
    private SignInController signInController ;
    @Autowired
    private UserRepository userRepository ;

    @Test
    public void correctSignInTest(){
        System.out.println(setUpIsDone);
        SignInDTO signInDTO = new SignInDTO();
        signInDTO.setUserName("mariam");
        signInDTO.setPassword("12345");
        long expectedId = userRepository
                                .findUserByUserName(signInDTO.getUserName())
                                .orElse(null)
                                .getId();
        UserIdDTO userIdDTO = signInController.signIn(signInDTO);
        assertEquals(expectedId,userIdDTO.getUserId());
        assertEquals(0,userIdDTO.getStatusCode());
    }

    @Test
    public void wrongPassSignInTest(){
        SignInDTO signInDTO = new SignInDTO();
        signInDTO.setUserName("mariam");
        signInDTO.setPassword("1234567");
        UserIdDTO userIdDTO= signInController.signIn(signInDTO);
        assertEquals(UserService.WRONG_PASSWORD_STATUS_CODE, userIdDTO.getStatusCode());
    }

    @Test
    public void wrongUserNameSignInTest(){
        SignInDTO signInDTO = new SignInDTO();
        signInDTO.setUserName("maryam");
        signInDTO.setPassword("1234567");
        UserIdDTO userIdDTO = signInController.signIn(signInDTO);
        assertEquals(UserService.WRONG_USERNAME_STATUS_CODE,userIdDTO.getStatusCode());
    }

    @Test
    public void nonExistingUserQuestion(){
        String expected = UserService.USER_NOT_FOUND_MESSAGE;
        String actual = signInController.getUserQuestion("mohamed");
        assertEquals(expected, actual);
    }


    @Test
    public void existingUserQuestion(){
        String expected = "What is your favorite color?";
        String actual = signInController.getUserQuestion("mariam");
        assertEquals(expected, actual);
    }

    @Test
    public void correctAnswerTest(){
        long correctId = userRepository
                            .findUserByUserName("mariam")
                            .orElse(null)
                            .getId();
        UserIdDTO userIdDTO = signInController.validateAnswer("mariam", "green");
        assertEquals(correctId, userIdDTO.getUserId());
        assertEquals(0, userIdDTO.getStatusCode());
    }

    @Test
    public void wrongAnswerTest(){
        int expected = UserService.WRONG_ANSWER_STATUS_CODE;
        long actual = signInController.validateAnswer("mariam", "red").getStatusCode();
        assertEquals(expected, actual);
    }


}
