package com.example.gymserver.services;

import com.example.gymserver.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public int signIn(String userName, String password){
        return 0;
    }

    /*
    * it's used when the user forgets password
    *
    * @param userName
    * @return the question this user choose when signing up and null if not found
    */
    public String getUserQuestion(String userName){
        return null;
    }

    /*
     * this method checks if the answer the user provided to the question is correct ot not
     *
     * @param userName
     * @param answer
     * @return user id if the answer is correct and -1 if the answer is not correct
     */
    public int validateAnswer(String userName, String answer){
        return 0;
    }

    /*
    * this method updates the password for user with the userName
    *
    * @param userName
    * @param newPassword
    * @returns user id
    */
    public int changePassword(String userName, String newPassword){
        return 0;
    }

}
