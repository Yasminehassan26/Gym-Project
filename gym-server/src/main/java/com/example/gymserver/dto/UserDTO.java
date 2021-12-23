package com.example.gymserver.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Transient;
import java.time.LocalDate;

@Getter
@Setter
public class UserDTO {

    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private LocalDate birth_date;
    private String phoneNumber;
    private String question;
    private String answer;
    @Transient
    private Integer age;

}
