package com.example.gymserver;

import com.example.gymserver.controllers.ShopController;
import com.example.gymserver.controllers.StaticPagesController;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class StaticPagesServiceTest {

    @Autowired
    private StaticPagesController staticPagesController;


    @Test
    public void showTrainers(){

    }

    @Test
    public void showHealthTips(){

    }

    @Test
    public void showWorkoutTips(){

    }

}
