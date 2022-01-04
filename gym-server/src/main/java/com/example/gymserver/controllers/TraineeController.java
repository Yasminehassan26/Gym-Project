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

    @PostMapping("sessions/{userName}")
    public List<SessionDTO> getSessions(
            @PathVariable("userName") String userName, @RequestBody UserIdDTO userIdDTO
    ){
        return this.traineeService.getSessions(userName, userIdDTO);
    }

    @PostMapping("follow-up/{userName}")
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
        return this.traineeService.bookProgram(userName, programID, userIdDTO);
    }

    @PostMapping("book-session/{userName}/{sessionId}")
    public String bookSession(
            @PathVariable("userName") String userName,
            @PathVariable("sessionId") String sessionId,
            @RequestBody UserIdDTO userIdDTO
    ){
        Long sessionID = Long.parseLong(sessionId);
        return this.traineeService.bookSession(userName, sessionID, userIdDTO);
    }
}
