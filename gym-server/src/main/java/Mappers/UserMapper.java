package Mappers;

import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.models.User;

public class UserMapper {
    public static UserDTO toUserDto(User myUser){
        UserDTO u = new UserDTO();
        u.setUserName(myUser.getUserName());
        u.setPassword(myUser.getPassword());
        u.setFirstName(myUser.getFirstName());
        u.setLastName(myUser.getLastName());
        u.setPhoneNumber(myUser.getPhoneNumber());
        u.setBirth_date(myUser.getBirth_date());
        u.setQuestion(myUser.getQuestion());
        u.setAnswer(myUser.getAnswer());
        u.setAge(myUser.getAge());
        return u;
    }

    public static User toUser(UserDTO myUser){
        User u = new User();
        u.setUserName(myUser.getUserName());
        u.setPassword(myUser.getPassword());
        u.setFirstName(myUser.getFirstName());
        u.setLastName(myUser.getLastName());
        u.setPhoneNumber(myUser.getPhoneNumber());
        u.setBirth_date(myUser.getBirth_date());
        u.setQuestion(myUser.getQuestion());
        u.setAnswer(myUser.getAnswer());
        u.setAge(myUser.getAge());
        return u;
    }
}
