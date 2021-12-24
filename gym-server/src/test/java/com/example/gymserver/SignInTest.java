package com.example.gymserver;

import com.example.gymserver.controllers.SignInController;
import com.example.gymserver.dto.SignInDTO;
import com.example.gymserver.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class SignInTest {

    @Autowired
    private SignInController signInController ;

    public void correctSignInTest(){
        SignInDTO signInDTO = new SignInDTO();
        signInDTO.setUserName("mariam");
        signInDTO.setPassword("12345");
        long userId = signInController.signIn(signInDTO);
        assertEquals(userId, 1);
    }

    public void nonExistingUserQuestion(){
        String expected = UserService.USER_NOT_FOUND_MESSAGE;
        String actual = signInController.getUserQuestion("mohamed");
        assertEquals(expected, actual);
    }

    public void existingUserQuestion(){
        String expected = "What is your favourite pet?";
        String actual = signInController.getUserQuestion("mariam");
        assertEquals(expected, actual);
    }

    public void correctAnswerTest(){
        long expected = 1;
        long actual = signInController.validateAnswer("mariam", "Dogs");
        assertEquals(expected, actual);
    }

    public void wrongAnswetTest(){
        int expected = UserService.WRONG_ANSWER_STATUS_CODE;
        long actual = signInController.validateAnswer("mariam", "Cats");
        assertEquals(expected, actual);
    }


}
