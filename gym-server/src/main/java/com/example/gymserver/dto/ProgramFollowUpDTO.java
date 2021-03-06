package com.example.gymserver.dto;

import lombok.*;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ProgramFollowUpDTO {
    private String title;
    private Long programId;
    private List<ClassFollowUpDTO> classesFollowUp;
}
