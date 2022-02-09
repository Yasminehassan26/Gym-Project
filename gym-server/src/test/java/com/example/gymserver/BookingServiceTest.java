package com.example.gymserver;

import com.example.gymserver.controllers.SignInController;
import com.example.gymserver.controllers.SignUpController;
import com.example.gymserver.controllers.TraineeController;
import com.example.gymserver.dto.*;

import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.TraineeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class BookingServiceTest {

    @Autowired
    private TraineeController traineeController;
    @Autowired
    private SignInController signInController;
    @Autowired
    private SignUpController signUpController;



    @Test
    public void bookProgram(){
        UserIdDTO userIdDTO = signInController.signIn(new SignInDTO("mariam" , "12345"));
        int actual = traineeController.bookProgram("mariam", "1", userIdDTO);
        assertEquals(0, actual);
    }

    @Test
    public void viewTraineeProgram(){
        UserIdDTO userIdDTO = signInController.signIn(new SignInDTO("mariam" , "12345"));
        List<ProgramFollowUpDTO> followUpDTOsActual = traineeController.getFollowUps("mariam", userIdDTO);
        System.out.println(followUpDTOsActual.toArray().toString());
        List<ClassFollowUpDTO> classFollowUpDTOS = new ArrayList<>();
        classFollowUpDTOS.add(new ClassFollowUpDTO("Yoga", "36"));
        classFollowUpDTOS.add(new ClassFollowUpDTO("Aerobics", "36"));
        classFollowUpDTOS.add(new ClassFollowUpDTO("Boxing", "36"));
        classFollowUpDTOS.add(new ClassFollowUpDTO("Air Yoga", "36"));
        classFollowUpDTOS.add(new ClassFollowUpDTO("Lean", "36"));
        classFollowUpDTOS.add(new ClassFollowUpDTO("CrossFit", "36"));
        ProgramFollowUpDTO programFollowUpDTO = new ProgramFollowUpDTO("gold", 1l, classFollowUpDTOS);
        List<ProgramFollowUpDTO> followUpDTOsExpected = new ArrayList<>();
        followUpDTOsExpected.add(programFollowUpDTO);
        assertEquals(followUpDTOsActual, followUpDTOsActual);
    }

    @Test
    public void bookSessionValid(){
        UserIdDTO userIdDTO = signInController.signIn(new SignInDTO("mariam" , "12345"));
        int actual = traineeController.bookSession("mariam", "1", userIdDTO);
        assertEquals(0, actual);
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
    public void bookSessionNoBookedProgram(){
        signUpUser("noha");
        UserIdDTO userIdDTO = signInController.signIn(new SignInDTO("Noha" , "12345"));
        int actual = traineeController.bookSession("noha", "1", userIdDTO);
        assertEquals(TraineeService.NO_BOOKED_PROGRAM_STATUS_CODE, actual);
    }
    @Test
    public void bookSessionNoRemainingSession(){
        UserIdDTO userIdDTO = signInController.signIn(new SignInDTO("mariam" , "12345"));
        int actual = traineeController.bookSession("mariam", "3", userIdDTO);
        assertEquals(TraineeService.FULL_SESSION_STATUS_CODE, actual);
    }

    @Test
    public void bookBookedSession(){
        UserIdDTO userIdDTO = signInController.signIn(new SignInDTO("mariam" , "12345"));
        int actual = traineeController.bookSession("mariam", "1", userIdDTO);
        assertEquals(TraineeService.TRAINEE_REGISTERED_BEFORE_STATUS_CODE, actual);
    }

    @Test
    public void bookSessionFull(){
        UserIdDTO userIdDTO = signInController.signIn(new SignInDTO("mariam" , "12345"));
        int actual = traineeController.bookSession("mariam", "3", userIdDTO);
        assertEquals(TraineeService.FULL_SESSION_STATUS_CODE, actual);
    }

}
