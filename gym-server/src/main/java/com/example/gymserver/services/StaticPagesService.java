package com.example.gymserver.services;

import com.example.gymserver.models.Tip;
import com.example.gymserver.models.Trainer;
import com.example.gymserver.repositories.TipRepository;
import com.example.gymserver.repositories.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaticPagesService {

    private final TipRepository tipRepository;
    private final TrainerRepository trainerRepository;

    @Autowired
    public StaticPagesService(TipRepository tipRepository, TrainerRepository trainerRepository) {
        this.tipRepository = tipRepository;
        this.trainerRepository = trainerRepository;
    }


    public List<Tip> getHealthTips() {
        return tipRepository.findTipsByCategory("Health").orElse(null);
    }

    public List<Tip> getWorkOutTips() {
        return tipRepository.findTipsByCategory("WorkOut").orElse(null);
    }

    public List<Trainer> getTrainers() {
        return trainerRepository.findAll();
    }
}
