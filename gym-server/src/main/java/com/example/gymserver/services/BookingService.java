package com.example.gymserver.services;

import com.example.gymserver.dto.ProgramDTO;
import com.example.gymserver.dto.SessionDTO;
import com.example.gymserver.mappers.ProgramMapper;
import com.example.gymserver.mappers.SessionMapper;
import com.example.gymserver.models.Program;
import com.example.gymserver.models.Session;
import com.example.gymserver.repositories.ClassRepository;
import com.example.gymserver.repositories.ProgramRepository;
import com.example.gymserver.repositories.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookingService{
    private AuthenticationService authenticationService;
    private ProgramRepository programRepository;
    private ClassRepository classRepository;
    @Autowired
    private SessionRepository sessionRepository;

    @Autowired
    public BookingService(AuthenticationService authenticationService,
                          ProgramRepository programRepository,
                          ClassRepository classRepository) {
        this.authenticationService = authenticationService;
        this.programRepository = programRepository;
        this.classRepository = classRepository;
    }

    public List<ProgramDTO> getAllPrograms() {
        List<ProgramDTO> programDTOS = new ArrayList<>();
        for(Program program : this.programRepository.findAll()) {
            programDTOS.add(ProgramMapper.toProgramDTO(program));
        }
        return programDTOS;
    }

    public List<SessionDTO> getAllSessions() {
        List<SessionDTO> sessionDTOS = new ArrayList<>();
        for(Session session : this.sessionRepository.findAll()) {
            sessionDTOS.add(SessionMapper.toSessionDTO(session));
        }
        return sessionDTOS;
    }
}
