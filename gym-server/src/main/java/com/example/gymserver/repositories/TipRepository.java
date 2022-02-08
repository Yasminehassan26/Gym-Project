package com.example.gymserver.repositories;

import com.example.gymserver.models.Product;
import com.example.gymserver.models.Tip;
import com.example.gymserver.models.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TipRepository extends JpaRepository<Tip, Long> {
    @Query("SELECT t FROM Tip t WHERE t.category = ?1")
    Optional<List<Tip>> findTipsByCategory(String category);

}
