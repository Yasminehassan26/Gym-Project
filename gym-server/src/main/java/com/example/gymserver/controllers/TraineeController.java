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

    /**
     *
     * @param userName
     * @param userIdDTO
     * @return list of trainee booked sessions
     */
    @PostMapping("sessions/{userName}")
    public List<SessionDTO> getSessions(
            @PathVariable("userName") String userName, @RequestBody UserIdDTO userIdDTO
    ){
        return this.traineeService.getSessions(userName, userIdDTO);
    }

    /**
     *
     * @param userName
     * @param userIdDTO
     * @return list of trainee booked programs
     */
    @PostMapping("follow-up/{userName}")
    public List<ProgramFollowUpDTO> getFollowUps(
            @PathVariable("userName") String userName, @RequestBody UserIdDTO userIdDTO
    ){
        return this.traineeService.getFollowUps(userName, userIdDTO);
    }

    /**
     *
     * @param userName
     * @param userIdDTO
     * @return status code
     *
     * SUCCESS_STATUS_CODE = 0
     * UNAUTHENTICATED_USER_STATUS_CODE = -100
     * INVALID_ENTITY_STATUS_CODE = -10
     */
    @PostMapping("book-program/{userName}/{programId}")
    public int bookProgram(
            @PathVariable("userName") String userName,
            @PathVariable("programId") String programId,
            @RequestBody UserIdDTO userIdDTO
    ){
        Long programID = Long.parseLong(programId);
        return this.traineeService.bookProgram(userName, programID, userIdDTO);
    }

    /**
     *
     * @param userName
     * @param sessionId
     * @param userIdDTO
     * @return status code
     *
     * NO_BOOKED_PROGRAM_STATUS_CODE = -1;
     * NO_REMAINING_SESSIONS_STATUS_CODE = -2;
     * TRAINEE_REGISTERED_BEFORE_STATUS_CODE = -4;
     * FULL_SESSION_STATUS_CODE = -5;
     * SUCCESS_STATUS_CODE = 0
     * UNAUTHENTICATED_USER_STATUS_CODE = -100
     * INVALID_ENTITY_STATUS_CODE = -10
     */
    @PostMapping("book-session/{userName}/{sessionId}")
    public int bookSession(
            @PathVariable("userName") String userName,
            @PathVariable("sessionId") String sessionId,
            @RequestBody UserIdDTO userIdDTO
    ){
        Long sessionID = Long.parseLong(sessionId);
        return this.traineeService.bookSession(userName, sessionID, userIdDTO);
    }
}
