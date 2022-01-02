package com.example.gymserver.dto;

import java.time.LocalDate;
import java.util.Arrays;

public class ProgramFollowUpDTO {
    private Long programId;
    private String programName;
    private LocalDate endDate;
    private ClassFollowUpDTO[] classesFollowUp;

    public Long getProgramId() {
        return programId;
    }

    public void setProgramId(Long programId) {
        this.programId = programId;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public ClassFollowUpDTO[] getClassesFollowUp() {
        return classesFollowUp;
    }

    public void setClassesFollowUp(ClassFollowUpDTO[] classesFollowUp) {
        this.classesFollowUp = classesFollowUp;
    }

    @Override
    public String toString() {
        return "ProgramFollowUpDTO{" +
                "programId=" + programId +
                ", programName='" + programName + '\'' +
                ", endDate=" + endDate +
                ", classesFollowUp=" + Arrays.toString(classesFollowUp) +
                '}';
    }
}
