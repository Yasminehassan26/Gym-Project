package com.example.gymserver.dto;

import lombok.*;

import java.util.List;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProgramDTO {
    private long programId;
    private String name;
    private String duration;
    private String price;
    private String description;
    private List<PClassDetailsDTO> classesDetails;
}