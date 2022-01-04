package com.example.gymserver.services;

import com.example.gymserver.models.Program;
import com.example.gymserver.models.Session;
import com.example.gymserver.repositories.ClassRepository;
import com.example.gymserver.repositories.ProgramRepository;
import com.example.gymserver.repositories.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public List<Program> getAllPrograms() {
        return this.programRepository.findAll();
    }

    public List<Session> getAllSessions() {
        return this.sessionRepository.findAll();
    }
}
