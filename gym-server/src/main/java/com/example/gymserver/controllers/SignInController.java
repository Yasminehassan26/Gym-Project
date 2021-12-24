package com.example.gymserver.controllers;

import com.example.gymserver.dto.SignInDTO;
import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.SignInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class SignInController {

    private final SignInService signInService;

    public SignInController(SignInService signInService) {
        this.signInService = signInService;
    }

    /**
     * 
     * @param signInDTO
     * @return userId if correct username and password,
     *                -1 if username wrong , -2 if password wrong
     */
    @GetMapping("/sign-in")
    public long signIn(@RequestBody SignInDTO signInDTO){
        return this.signInService.signIn(signInDTO.getUserName(),signInDTO.getPassword());
    }

    /**
     * 
     * @param userName
     * @return user question if userexists or "User Not Found Message"
     */
    @GetMapping("/get-user-question/{userName}")
    public String getUserQuestion(
        @PathVariable("userName") String userName){
        return signInService.getUserQuestion(userName);
    }

    /**
     * 
     * @param userName
     * @param answer
     * @return userId if correct answer or -3 otherwise
     */
    @GetMapping("/validate-answer/{userName}")
    public long validateAnswer(
        @PathVariable("userName") String userName, @RequestBody String answer){
        return signInService.validateAnswer(userName, answer);
    }
}
