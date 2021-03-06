package com.example.gymserver.controllers;

import com.example.gymserver.dto.SignInDTO;
import com.example.gymserver.dto.UserIdDTO;
import com.example.gymserver.repositories.UserRepository;
import com.example.gymserver.services.SignInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
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
    @PostMapping("/sign-in")
    public UserIdDTO signIn(@RequestBody SignInDTO signInDTO){
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
        System.out.println(signInService.getUserQuestion(userName));
        return signInService.getUserQuestion(userName);
    }

    /**
     * 
     * @param userName
     * @param answer
     * @return userId if correct answer or -3 otherwise
     */
    @PostMapping("/validate-answer/{userName}")
    public UserIdDTO validateAnswer(
        @PathVariable("userName") String userName, @RequestBody String answer){
        return signInService.validateAnswer(userName, answer);
    }
}
