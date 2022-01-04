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
    private String name;
    private String attendedSessions;

    public String getClassName() {
        return name;
    }

    public void setClassName(String className) {
        this.name = className;
    }

    public String getAttendedSessions() {
        return attendedSessions;
    }

    public void setAttendedSessions(String attendedSessions) {
        this.attendedSessions = attendedSessions;
    }

    @Override
    public String toString() {
        return "ClassFollowUpDTO{" +
                ", className='" + name + '\'' +
                ", attendedSessions=" + attendedSessions +
                '}';
    }
}
