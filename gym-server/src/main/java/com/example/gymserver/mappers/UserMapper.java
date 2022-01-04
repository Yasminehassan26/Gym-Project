package com.example.gymserver.mappers;

import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.models.User;

import java.time.LocalDate;
import java.time.Month;

public class UserMapper {
    public static UserDTO toUserDto(User myUser){
        UserDTO u = new UserDTO();
        u.setUserName(myUser.getUserName());
        u.setPassword(myUser.getPassword());
        u.setFirstName(myUser.getFirstName());
        u.setLastName(myUser.getLastName());
        u.setPhoneNumber(myUser.getPhoneNumber());
        u.setBirth_date(myUser.getBirth_date().toString());
        u.setQuestion(myUser.getQuestion());
        u.setAnswer(myUser.getAnswer());
        u.setAge(myUser.getAge());
        u.setRole(myUser.getRole());
        u.setUserId(myUser.getId());
        return u;
    }

    public static User toUser(UserDTO myUser){
        User u = new User();
        u.setUserName(myUser.getUserName());
        u.setPassword(myUser.getPassword());
        u.setFirstName(myUser.getFirstName());
        u.setLastName(myUser.getLastName());
        u.setPhoneNumber(myUser.getPhoneNumber());
        LocalDate birthDate = LocalDate.parse(myUser.getBirth_date());
        u.setBirth_date(birthDate);
        u.setQuestion(myUser.getQuestion());
        u.setAnswer(myUser.getAnswer());
        u.setAge(myUser.getAge());
        u.setRole(myUser.getRole());
        return u;
    }
}
