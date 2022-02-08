package com.example.gymserver.controllers;

import com.example.gymserver.models.Tip;
import com.example.gymserver.models.Trainer;
import com.example.gymserver.services.StaticPagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/Tips")
public class StaticPagesController {

    private final StaticPagesService staticPagesService;

    @Autowired
    public StaticPagesController(StaticPagesService StaticPagesService) {
        this.staticPagesService = StaticPagesService;
    }


    @GetMapping("/health")
    public List<Tip> getHealthTips(){
        return staticPagesService.getHealthTips();
    }

    @GetMapping("/work-out")
    public List<Tip> getWorkOutTips(){
        return staticPagesService.getWorkOutTips();
    }

    @GetMapping("/trainers")
    public List<Trainer> getTrainers(){
        return staticPagesService.getTrainers();
    }

}
