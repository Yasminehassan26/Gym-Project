package com.example.gymserver.repositories;

import com.example.gymserver.models.Session;
import com.example.gymserver.models.Trainee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TraineeRepository extends JpaRepository<Trainee, Long> {
}
