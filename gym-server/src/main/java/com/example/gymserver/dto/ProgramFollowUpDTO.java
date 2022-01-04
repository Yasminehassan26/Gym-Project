package com.example.gymserver.dto;

import java.time.LocalDate;
import java.util.Arrays;

public class ProgramFollowUpDTO {
    private String title;
    private ClassFollowUpDTO[] classesFollowUp;

    public String getProgramTitle() {
        return title;
    }

    public void setProgramName(String programName) {
        this.title = programName;
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
                ", programName='" + title + '\'' +
                ", classesFollowUp=" + Arrays.toString(classesFollowUp) +
                '}';
    }
}
