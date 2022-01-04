package com.example.gymserver.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Arrays;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProgramFollowUpDTO {
    private String title;
    private ClassFollowUpDTO[] classesFollowUp;

    @Override
    public String toString() {
        return "ProgramFollowUpDTO{" +
                ", programName='" + title + '\'' +
                ", classesFollowUp=" + Arrays.toString(classesFollowUp) +
                '}';
    }
}
