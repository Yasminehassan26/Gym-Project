package com.example.gymserver.dto;

public class ClassFollowUpDTO {
    private String className;
    private int attendedSessions;

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public int getAttendedSessions() {
        return attendedSessions;
    }

    public void setAttendedSessions(int attendedSessions) {
        this.attendedSessions = attendedSessions;
    }

    @Override
    public String toString() {
        return "ClassFollowUpDTO{" +
                ", className='" + className + '\'' +
                ", attendedSessions=" + attendedSessions +
                '}';
    }
}
