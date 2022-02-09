package com.example.gymserver;

import com.example.gymserver.controllers.SignInController;
import com.example.gymserver.controllers.SignUpController;
import com.example.gymserver.dto.SignInDTO;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.mappers.UserMapper;
import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.UserService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ActiveProfiles("test")
public class SignInServiceTest {

    @Autowired
    private SignUpController signUpController ;
    @Autowired
    private UserRepository userRepository ;
    @Autowired
    private SignInController signInController ;

    private static UserDTO registeredUser;

    private static boolean setUpDone = false;

    @BeforeEach
    public void setUp() {
        User user = userRepository
                .findUserByUserName("mariam")
                .orElse(null);

        registeredUser = UserMapper.toUserDto(user);
    }

    private  UserIdDTO signUpUser(String userName, String password){
        registeredUser = new UserDTO();
        registeredUser.setUserName(userName);
        registeredUser.setAge(17);
        registeredUser.setBirth_date(String.valueOf(LocalDate.parse("2000-07-18")));
        registeredUser.setFirstName("Mariam");
        registeredUser.setLastName("Ahmed");
        registeredUser.setPassword(password);
        registeredUser.setPhoneNumber("01273322997");
        registeredUser.setQuestion("What is your favorite color?");
        registeredUser.setAnswer("green");
        registeredUser.setRole("Trainee");
        return signUpController.signUp(registeredUser);
    }




    @Test
    public void correctSignInTest(){
      //  setUp();
        SignInDTO signInDTO = new SignInDTO();
        signInDTO.setUserName(registeredUser.getUserName());
        signInDTO.setPassword(registeredUser.getPassword());
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
      //  setUp();
        SignInDTO signInDTO = new SignInDTO();
        signInDTO.setUserName(registeredUser.getUserName());
        signInDTO.setPassword("1234567");
        UserIdDTO userIdDTO= signInController.signIn(signInDTO);
        assertEquals(UserService.WRONG_PASSWORD_STATUS_CODE, userIdDTO.getStatusCode());
    }

    @Test
    public void wrongUserNameSignInTest(){
      //  setUp();
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
       // setUp();
        String expected = "What is your favorite color?";
        String actual = signInController.getUserQuestion(registeredUser.getUserName());
        assertEquals(expected, actual);
    }

    @Test
    public void correctAnswerTest(){
       // setUp();
        long correctId = userRepository
                            .findUserByUserName(registeredUser.getUserName())
                            .orElse(null)
                            .getId();
        UserIdDTO userIdDTO = signInController.validateAnswer(registeredUser.getUserName(), "green");
        assertEquals(correctId, userIdDTO.getUserId());
        assertEquals(0, userIdDTO.getStatusCode());
    }

    @Test
    public void wrongAnswerTest(){
     //   setUp();
        int expected = UserService.WRONG_ANSWER_STATUS_CODE;
        long actual = signInController.validateAnswer(registeredUser.getUserName(), "red").getStatusCode();
        assertEquals(expected, actual);
    }


}
