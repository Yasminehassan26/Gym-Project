package com.example.gymserver.repositories;

import com.example.gymserver.models.Program;
import com.example.gymserver.models.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.Optional;

public interface SessionRepository extends JpaRepository<Session, Long> {
    @Query("SELECT s FROM Session s WHERE s.startTime >= ?1")
    Optional<Session> findUpComingSessions(LocalDate sessionTime);

}
