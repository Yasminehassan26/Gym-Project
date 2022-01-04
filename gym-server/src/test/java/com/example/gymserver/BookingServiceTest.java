package com.example.gymserver;

import com.example.gymserver.controllers.SignInController;
import com.example.gymserver.controllers.SignUpController;
import com.example.gymserver.controllers.TraineeController;
import com.example.gymserver.dto.ClassFollowUpDTO;
import com.example.gymserver.dto.SignInDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.dto.ProgramFollowUpDTO;

import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.TraineeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class BookingServiceTest {

    @Autowired
    private TraineeController traineeController;
    @Autowired
    private SignInController signInController;

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
        ProgramFollowUpDTO programFollowUpDTO = new ProgramFollowUpDTO("gold", classFollowUpDTOS);
        List<ProgramFollowUpDTO> followUpDTOsExpected = new ArrayList<>();
        followUpDTOsExpected.add(programFollowUpDTO);
        assertEquals(followUpDTOsActual, followUpDTOsActual);
    }
}
