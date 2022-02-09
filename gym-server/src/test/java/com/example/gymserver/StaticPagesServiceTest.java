package com.example.gymserver;

import com.example.gymserver.controllers.ShopController;
import com.example.gymserver.controllers.StaticPagesController;
import com.example.gymserver.dto.UserDTO;
import com.example.gymserver.models.Tip;
import com.example.gymserver.models.Trainer;
import com.example.gymserver.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@ActiveProfiles("test")
public class StaticPagesServiceTest {

    @Autowired
    private StaticPagesController staticPagesController;


    @Test
    public void showTrainers(){
        List<Trainer> trainers = this.staticPagesController.getTrainers();
        assertEquals(9,trainers.size());
    }

    @Test
    public void showHealthTips(){
        List<Tip> healthTips = this.staticPagesController.getHealthTips();
        assertEquals(9,healthTips.size());
    }

    @Test
    public void showWorkoutTips(){
        List<Tip> workOutTips = this.staticPagesController.getWorkOutTips();
        assertEquals(9,workOutTips.size());
    }

}
