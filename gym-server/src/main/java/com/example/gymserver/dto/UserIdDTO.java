package com.example.gymserver.dto;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserIdDTO {
    private long userId;
    private String role;
    private int statusCode;
}
