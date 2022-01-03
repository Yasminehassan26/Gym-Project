package com.example.gymserver.services;

import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.models.User;
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
    public UserIdDTO signIn(String userName, String password){
        User user = this.userRepository.findUserByUserName(userName).orElse(null);
        UserIdDTO userIdDTO = new UserIdDTO();
        if(user == null)
            userIdDTO.setStatusCode(UserService.WRONG_USERNAME_STATUS_CODE);
        else if(!password.equals(user.getPassword()))
            userIdDTO.setStatusCode(UserService.WRONG_PASSWORD_STATUS_CODE);
        else{
            userIdDTO.setUserId(user.getId());
            userIdDTO.setRole(user.getRole());
        }
        return userIdDTO;
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
    public UserIdDTO validateAnswer(String userName, String answer){
        User user = userRepository.findUserByUserName(userName).orElse(null);
        UserIdDTO userIdDTO = new UserIdDTO();
        if( user == null )
            userIdDTO.setStatusCode(UserService.WRONG_USERNAME_STATUS_CODE);
        if(answer.equalsIgnoreCase(user.getAnswer())){
            userIdDTO.setUserId(user.getId());
            userIdDTO.setRole(user.getRole());
        }
        else
            userIdDTO.setStatusCode(UserService.WRONG_ANSWER_STATUS_CODE);
         return userIdDTO;
    }
}
