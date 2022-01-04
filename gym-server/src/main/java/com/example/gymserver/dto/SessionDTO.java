package com.example.gymserver.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class SessionDTO {
    private Long sessionId;
    private String name;
    private String date;
    private String endTime;
    private String trainerName;
    private String attendee;
}
