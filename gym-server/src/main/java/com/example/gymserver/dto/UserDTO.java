package com.example.gymserver.dto;

import com.example.gymserver.models.PClassFollowUp;
import com.example.gymserver.models.Session;
import lombok.*;

import javax.persistence.Transient;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private long userId;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private String birth_date;
    private String phoneNumber;
    private String question;
    private String answer;
    private Integer age;
    private String role;

}
