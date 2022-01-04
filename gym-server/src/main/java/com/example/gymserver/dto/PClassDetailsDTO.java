package com.example.gymserver.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PClassDetailsDTO {
    private String className;
    private int noOfClasses;
    private String description;
}
