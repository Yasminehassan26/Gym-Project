package com.example.gymserver;

import com.example.gymserver.controllers.SignInController;
import com.example.gymserver.dto.SignInDTO;
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
}
