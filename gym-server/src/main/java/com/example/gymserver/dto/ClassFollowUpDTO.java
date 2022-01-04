package com.example.gymserver.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ClassFollowUpDTO {
    private String className;
    private String attendedSessions;
}
