package com.example.gymserver.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PClassDetailsDTO {
    private String className;
    private int noOfClasses;
    private String description;
}
