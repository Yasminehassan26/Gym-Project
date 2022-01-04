package com.example.gymserver.mappers;

import com.example.gymserver.dto.SessionDTO;
import com.example.gymserver.models.Session;


public class SessionMapper {

    public static SessionDTO toSessionDTO(Session session){
        SessionDTO sessionDTO = SessionDTO.builder()
                                .sessionId(session.getId())
                                .name(session.getProgramClass().getClassType())
                                .date(session.getStartTime().toString())
                                .attendee(session.getNoOfAttendees() + "/" + session.getMaxNoOfAttendees())
                                .build();
        return sessionDTO;
    }

    public static Session toSession(SessionDTO sessionDTO){
        return null;
    }
}
