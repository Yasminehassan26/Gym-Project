package com.example.gymserver.repositories;

import com.example.gymserver.models.Class;
import com.example.gymserver.models.PClassFollowUp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PClassFollowUpRepository extends JpaRepository<PClassFollowUp, Long> {
}
