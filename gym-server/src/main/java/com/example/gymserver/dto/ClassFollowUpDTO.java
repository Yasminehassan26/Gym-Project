package com.example.gymserver.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ClassFollowUpDTO {
    private String className;
    private String attendedSessions;

    @Override
    public String toString() {
        return "ClassFollowUpDTO{" +
                ", className='" + className + '\'' +
                ", attendedSessions=" + attendedSessions +
                '}';
    }
}
