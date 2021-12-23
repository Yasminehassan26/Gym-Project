package com.example.gymserver.services;

import com.example.gymserver.models.User;
import com.example.gymserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SignInService {

    private UserRepository userRepository;

    @Autowired
    public SignInService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /*
    * @param userName
    * @param password
    * @return id of user if found, -1 if the password is wrong, and -2 if user name is not found
    */
    public long signIn(String userName, String password){
        User user = this.userRepository.findUserByUserName(userName).orElse(null);
        if(user == null)
            return UserService.USER_NOT_FOUND_STATUS_CODE;
        if(!password.equals(user.getPassword()))
            return UserService.WRONG_PASSWORD_STATUS_CODE;
        return user.getId().longValue();
    }

    /*
    * it's used when the user forgets password
    *
    * @param userName
    * @return the question this user choose when signing up and null if not found
    */
    public String getUserQuestion(String userName){
        User user = userRepository.findUserByUserName(userName).orElse(null);
        if( user == null ){
            return UserService.USER_NOT_FOUND_MESSAGE;
        }
        return user.getQuestion();
    }

    /*
     * this method checks if the answer the user provided to the question is correct ot not
     *
     * @param userName
     * @param answer
     * @return user id if the answer is correct and -1 if the answer is not correct
     */
    public long validateAnswer(String userName, String answer){
        User user = userRepository.findUserByUserName(userName).orElse(null);
        if( user == null )
            return UserService.USER_NOT_FOUND_STATUS_CODE;
        if( answer.equals(user.getAnswer()) )
            return user.getId();
        else
            return UserService.WRONG_ANSWER_STATUS_CODE;
    }

    /*
    * this method updates the password for user with the userName
    *
    * @param userName
    * @param newPassword
    * @returns user id
    */
    public Long changePassword(String userName, String newPassword){
        return 0L;
    }

}
