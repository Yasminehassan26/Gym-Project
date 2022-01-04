package com.example.gymserver.repositories;

import com.example.gymserver.models.Program;
import com.example.gymserver.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ProgramRepository extends JpaRepository<Program, Long> {
    @Query("SELECT p FROM Program p WHERE p.name = ?1")
    Optional<Program> findProgramByName(String programName);
}
