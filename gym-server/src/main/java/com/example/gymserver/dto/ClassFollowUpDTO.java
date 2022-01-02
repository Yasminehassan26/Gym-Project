package com.example.gymserver.dto;

public class ClassFollowUpDTO {
    private Long classId;
    private String className;
    private int attendedSessions;
    private int maxNumOfClasses;

    public Long getClassId() {
        return classId;
    }

    public void setClassId(Long classId) {
        this.classId = classId;
    }

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

    public int getMaxNumOfClasses() {
        return maxNumOfClasses;
    }

    public void setMaxNumOfClasses(int maxNumOfClasses) {
        this.maxNumOfClasses = maxNumOfClasses;
    }

    @Override
    public String toString() {
        return "ClassFollowUpDTO{" +
                "classId=" + classId +
                ", className='" + className + '\'' +
                ", attendedSessions=" + attendedSessions +
                ", maxNumOfClasses=" + maxNumOfClasses +
                '}';
    }
}
