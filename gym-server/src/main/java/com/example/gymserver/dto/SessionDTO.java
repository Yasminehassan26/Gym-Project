package com.example.gymserver.dto;

import java.util.Date;

public class SessionDTO {
    private int sessionId;
    private int classId;
    private String className;
    private Date date;
    private String startTime;
    private String EndTime;
    private int noOfAttendees;
    private int maxNoOfAttendees;
    
    public int getClassId() {
        return classId;
    }
    public void setClassId(int classId) {
        this.classId = classId;
    }
    
    public String getClassName() {
        return className;
    }
    public void setClassName(String className) {
        this.className = className;
    }
    public int getSessionId() {
        return sessionId;
    }
    public void setSessionId(int sessionId) {
        this.sessionId = sessionId;
    }
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public String getStartTime() {
        return startTime;
    }
    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }
    public String getEndTime() {
        return EndTime;
    }
    public void setEndTime(String endTime) {
        EndTime = endTime;
    }
    public int getNoOfAttendees() {
        return noOfAttendees;
    }
    public void setNoOfAttendees(int noOfAttendees) {
        this.noOfAttendees = noOfAttendees;
    }
    public int getMaxNoOfAttendees() {
        return maxNoOfAttendees;
    }
    public void setMaxNoOfAttendees(int maxNoOfAttendees) {
        this.maxNoOfAttendees = maxNoOfAttendees;
    }
    
    @Override
    public String toString() {
        return "SessionDTO [EndTime=" + EndTime + ", classId=" + classId + ", date=" + date + ", maxNoOfAttendees="
                + maxNoOfAttendees + ", noOfAttendees=" + noOfAttendees + ", sessionId=" + sessionId + ", startTime="
                + startTime + "]";
    }

}
