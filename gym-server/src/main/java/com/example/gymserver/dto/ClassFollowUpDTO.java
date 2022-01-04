package com.example.gymserver.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClassFollowUpDTO {
    private String className;
    private String attendedSessions;
}
