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

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static java.time.temporal.ChronoUnit.DAYS;

@Service
public class BookingService{
    private ProgramRepository programRepository;
    @Autowired
    private SessionRepository sessionRepository;

    @Autowired
    public BookingService(ProgramRepository programRepository) {
        this.programRepository = programRepository;
    }

    public List<ProgramDTO> getAllPrograms() {
        List<ProgramDTO> programDTOS = new ArrayList<>();
        for(Program program : this.programRepository.findAll()) {
            programDTOS.add(ProgramMapper.toProgramDTO(program));
        }
        return programDTOS;
    }

    @Transactional
    public List<SessionDTO> getAllSessions() {
        List<SessionDTO> sessionDTOS = new ArrayList<>();
        for(Session session : this.sessionRepository.findAll()) {
            updateIfPast(session);
            sessionDTOS.add(SessionMapper.toSessionDTO(session));
        }
        return sessionDTOS;
    }

    public void updateIfPast(Session session){
        if(session.getEndTime().isBefore(LocalDateTime.now())){
            int weeks =(int) Math.ceil(Math.abs(DAYS.between(LocalDateTime.now(), session.getStartTime()))/7.0);
            if( weeks == 0 ) weeks = 1;
            System.out.println(weeks);
            session.update(weeks);
            System.out.println(session.getDate());
        }
    }
}
