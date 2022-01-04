package com.example.gymserver.controllers;

import com.example.gymserver.dto.ClassFollowUpDTO;
import com.example.gymserver.dto.ProgramFollowUpDTO;
import com.example.gymserver.dto.SessionDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.models.Trainee;
import com.example.gymserver.services.TraineeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/trainee/")
public class TraineeController {

    private TraineeService traineeService;

    @Autowired
    public TraineeController(TraineeService traineeService){
        this.traineeService =traineeService;
    }

    @GetMapping("sessions/{userName}")
    public List<SessionDTO> getSessions(
            @PathVariable("userName") String userName, @RequestBody UserIdDTO userIdDTO
    ){
        List<SessionDTO> test = new ArrayList<>();
//        test.add(new SessionDTO("yoga","2022-1-6"));
//        test.add(new SessionDTO("general","2022-1-6"));
        return test;
    }

    @GetMapping("follow-up/{userName}")
    public List<ProgramFollowUpDTO> getFollowUps(
            @PathVariable("userName") String userName, @RequestBody UserIdDTO userIdDTO
    ){
        return this.traineeService.getFollowUps(userName, userIdDTO);
    }

    @PostMapping("book-program/{userName}/{programId}")
    public String bookProgram(
            @PathVariable("userName") String userName,
            @PathVariable("programId") String programId,
            @RequestBody UserIdDTO userIdDTO
    ){
        Long programID = Long.parseLong(programId);
        return traineeService.bookProgram(userName, programID, userIdDTO);
    }
}
