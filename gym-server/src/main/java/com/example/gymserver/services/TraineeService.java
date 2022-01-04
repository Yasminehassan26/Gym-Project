package com.example.gymserver.services;

import com.example.gymserver.dto.ProgramFollowUpDTO;
import com.example.gymserver.dto.SessionDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.mappers.PClassFollowUpMapper;
import com.example.gymserver.mappers.SessionMapper;
import com.example.gymserver.models.*;
import com.example.gymserver.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.beans.Transient;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class TraineeService {

    private AuthenticationService authenticationService;
    private ProgramRepository programRepository;
    private PClassFollowUpRepository pClassFollowUpRepository;
    private PClassDetailsRepository pClassDetailsRepository;
    private TraineeRepository traineeRepository;
    private SessionRepository sessionRepository;

    @Autowired
    public TraineeService(AuthenticationService authenticationService,
                          ProgramRepository programRepository,
                          PClassFollowUpRepository pClassFollowUpRepository,
                          PClassDetailsRepository pClassDetailsRepository,
                          TraineeRepository traineeRepository,
                          SessionRepository sessionRepository){
        this.authenticationService = authenticationService;
        this.pClassFollowUpRepository = pClassFollowUpRepository;
        this.programRepository = programRepository;
        this.pClassDetailsRepository = pClassDetailsRepository;
        this.traineeRepository = traineeRepository;
        this.sessionRepository = sessionRepository;
    }

    public List<SessionDTO> getSessions(String userName, UserIdDTO userIdDTO) {
        if(!this.authenticationService.authenticateUser(userIdDTO.getUserId(), userName))
            return null;
        else{
            List<SessionDTO> sessionDTOS = new ArrayList<>();
            Trainee trainee = this.traineeRepository.getById(userIdDTO.getUserId());
            for(Session session : trainee.getSessions()){
                sessionDTOS.add(SessionMapper.toSessionDTO(session));
            }
            return sessionDTOS;
        }
    }

    public List<ProgramFollowUpDTO> getFollowUps(String userName, UserIdDTO userIdDTO) {
        if(!this.authenticationService.authenticateUser(userIdDTO.getUserId(), userName))
            return null;
        else{
            List<ProgramFollowUpDTO> traineeFollowUp = new ArrayList<>();
            List<Long> programsId = this.pClassFollowUpRepository
                    .findProgramsIdByTraineeId(userIdDTO.getUserId()).orElse(null);
            if(programsId != null){
                for(Long id : programsId){
                    List<PClassFollowUp> classesFollowUp = this.pClassFollowUpRepository
                            .findFollowUpsByTraineeAndProgram(userIdDTO.getUserId(), id).orElse(null);
                    if(classesFollowUp != null){
                        traineeFollowUp.add(PClassFollowUpMapper.toProgramFollowUpDTO(classesFollowUp));
                    }else System.out.println(id + " is NULL!!!!");
                }
            }else System.out.println("ERROR IN GETTING PROGRAM IDS");
            return traineeFollowUp;
        }
    }

    public String bookProgram(String userName, Long programID, UserIdDTO userIdDTO) {
        String confirmation = "";
        if(!this.authenticationService.authenticateUser(userIdDTO.getUserId(), userName))
            confirmation = "unauthorized user";
        else{
            Program program = this.programRepository.findById(programID).orElse(null);
            if(program != null){
                List<PClassDetails> programDetails = this.pClassDetailsRepository
                        .findDetailsByProgramId(programID).orElse(null);
                if(programDetails != null){
                    Trainee trainee = this.traineeRepository.findById(userIdDTO.getUserId()).orElse(null);
                    for(PClassDetails classDetails : programDetails){
                        PClassFollowUp followUp = PClassFollowUp.builder()
                                                    .id(PClassFollowUpKey.builder()
                                                            .programId(program.getId())
                                                            .classId(classDetails.getId().getClassId())
                                                            .traineeId(trainee.getId())
                                                            .build())
                                                    .program(program)
                                                    .trainee(trainee)
                                                    .programClass(classDetails.getProgramClass())
                                                    .endDate(LocalDate.parse("2022-05-22"))
                                                    .sessionsRemaining(classDetails.getNoOfClasses())
                                                    .build();
                        this.pClassFollowUpRepository.save(followUp);
                    }
                    confirmation = "DONE";
                }
                else confirmation = "null program";
            }
            else confirmation = "wrong program id";
        }
        return confirmation;
    }

    @Transient
    public String bookSession(String userName, Long sessionID, UserIdDTO userIdDTO) {
        String confirmation = "";
        if(!this.authenticationService.authenticateUser(userIdDTO.getUserId(), userName))
            confirmation = "unauthorized user";
        else{
            Session session = this.sessionRepository.findById(sessionID).orElse(null);
            if( session != null ){
                List<PClassFollowUp> classFollowUps = pClassFollowUpRepository
                        .findFollowUpsByTraineeAndClass(userIdDTO.getUserId(),session.getProgramClass().getId()).orElse(null);
                if( classFollowUps != null ){
                    boolean noRemainingSessions = true;
                    for(PClassFollowUp classFollowUp : classFollowUps){
                        if( classFollowUp.getSessionsRemaining() != 0 ){
                            classFollowUp.reserveSession();
                            noRemainingSessions = false;
                            if( !session.isFull() ){
                                session.addAttendee();
                                Trainee trainee = traineeRepository.getById(userIdDTO.getUserId());
                                trainee.getSessions().add(session);
                            }
                            else
                                confirmation = "Session is full!";

                            break;
                        }
                    }
                    if( noRemainingSessions )
                        confirmation = "No remaining sessions for this class!";
                }
                else
                    confirmation = "No booked programs including this session!";
            }
            else
                confirmation = "No session by this id!";

        }
        return confirmation;
    }
}
