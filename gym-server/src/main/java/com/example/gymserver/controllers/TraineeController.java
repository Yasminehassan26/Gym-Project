package com.example.gymserver.controllers;

import com.example.gymserver.dto.ClassFollowUpDTO;
import com.example.gymserver.dto.ProgramFollowUpDTO;
import com.example.gymserver.dto.SessionDTO;
import com.example.gymserver.dto.UserIdDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/trainee/")
public class TraineeController {

    @GetMapping("sessions/{userName}")
    public List<SessionDTO> getSessions(
            @PathVariable("userName") String userName, @RequestBody UserIdDTO userIdDTO
    ){
        List<SessionDTO> test = new ArrayList<>();
        test.add(new SessionDTO("yoga","2022-1-6"));
        test.add(new SessionDTO("general","2022-1-6"));
        return test;
    }

    @GetMapping("follow-up/{userName}")
    public List<ProgramFollowUpDTO> getFollowUp(
            @PathVariable("userName") String userName, @RequestBody UserIdDTO userIdDTO
    ){
        List<ProgramFollowUpDTO> test = new ArrayList<>();
        ClassFollowUpDTO[] testClass= new ClassFollowUpDTO[2];
        testClass[0] = new ClassFollowUpDTO("yoga", "5/20");
        testClass[1] = new ClassFollowUpDTO("yoga", "5/20");
        test.add(new ProgramFollowUpDTO("program 1", testClass));
        test.add(new ProgramFollowUpDTO("program 2", testClass));
        return test;
    }

}
