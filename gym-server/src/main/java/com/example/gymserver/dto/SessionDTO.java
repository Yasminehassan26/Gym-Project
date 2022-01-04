package com.example.gymserver.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SessionDTO {
    private Long sessionId;
    private String name;
    private String date;
    private String attendee;
}
