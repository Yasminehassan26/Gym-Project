package com.example.gymserver.services;

import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.models.PClassDetails;
import com.example.gymserver.models.Program;
import com.example.gymserver.repositories.PClassDetailsRepository;
import com.example.gymserver.repositories.PClassFollowUpRepository;
import com.example.gymserver.repositories.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TraineeService {

    private AuthenticationService authenticationService;
    private ProgramRepository programRepository;
    private PClassFollowUpRepository pClassFollowUpRepository;
    private PClassDetailsRepository pClassDetailsRepository;

    @Autowired
    public TraineeService(AuthenticationService authenticationService,
                          ProgramRepository programRepository,
                          PClassFollowUpRepository pClassFollowUpRepository,
                          PClassDetailsRepository pClassDetailsRepository){
        this.authenticationService = authenticationService;
        this.pClassFollowUpRepository = pClassFollowUpRepository;
        this.programRepository = programRepository;
        this.pClassDetailsRepository = pClassDetailsRepository;
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

                }
            }
            else confirmation = "wrong program id";
        }
        return confirmation;
    }
}
