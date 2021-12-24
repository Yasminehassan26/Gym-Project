package com.example.gymserver;

import com.example.gymserver.controllers.SignInController;
import com.example.gymserver.dto.SignInDTO;
import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class SignInTest {

    @Autowired
    private SignInController signInController ;
    @Autowired
    private UserRepository userRepository ;

    @Test
    public void correctSignInTest(){
        SignInDTO signInDTO = new SignInDTO();
        signInDTO.setUserName("mariam");
        signInDTO.setPassword("12345");
        long expected = userRepository
                                .findUserByUserName(signInDTO.getUserName())
                                .orElse(null)
                                .getId();
        long actual = signInController.signIn(signInDTO);
        assertEquals(actual, expected);
    }

    @Test
    public void wrongPassSignInTest(){
        SignInDTO signInDTO = new SignInDTO();
        signInDTO.setUserName("mariam");
        signInDTO.setPassword("1234567");
        long actual = signInController.signIn(signInDTO);
        assertEquals(actual, UserService.WRONG_PASSWORD_STATUS_CODE);
    }

    @Test
    public void wrongUserNameSignInTest(){
        SignInDTO signInDTO = new SignInDTO();
        signInDTO.setUserName("maryam");
        signInDTO.setPassword("1234567");
        long actual = signInController.signIn(signInDTO);
        assertEquals(actual, UserService.WRONG_USERNAME_STATUS_CODE);
    }

    @Test
    public void nonExistingUserQuestion(){
        String expected = UserService.USER_NOT_FOUND_MESSAGE;
        String actual = signInController.getUserQuestion("mohamed");
        assertEquals(expected, actual);
    }
    

    @Test
    public void existingUserQuestion(){
        String expected = "What is your favourite pet?";
        String actual = signInController.getUserQuestion("mariam");
        assertEquals(expected, actual);
    }

    @Test
    public void correctAnswerTest(){
        long expected = userRepository
                            .findUserByUserName("mariam")
                            .orElse(null)
                            .getId();
        long actual = signInController.validateAnswer("mariam", "Dogs");
        assertEquals(expected, actual);
    }

    @Test
    public void wrongAnswetTest(){
        int expected = UserService.WRONG_ANSWER_STATUS_CODE;
        long actual = signInController.validateAnswer("mariam", "Cats");
        assertEquals(expected, actual);
    }


}
