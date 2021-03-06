package com.example.gymserver.controllers;

import com.example.gymserver.dto.ProgramDTO;
import com.example.gymserver.dto.SessionDTO;
import com.example.gymserver.models.Program;
import com.example.gymserver.models.Session;
import com.example.gymserver.services.BookingService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/booking")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    /**
     *
     * @return list of available programs
     */
    @GetMapping("/programs")
    public List<ProgramDTO> getAllPrograms(){
        return bookingService.getAllPrograms();
    }

    /**
     *
     * @return list of upcomming sessions
     */
    @GetMapping("/sessions")
    public List<SessionDTO> getAllSessions(){
        return bookingService.getAllSessions();
    }


}
