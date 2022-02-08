package com.example.gymserver.repositories;

import com.example.gymserver.models.Tip;
import com.example.gymserver.models.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainerRepository extends JpaRepository<Trainer, Long> {
}
