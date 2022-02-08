package com.example.gymserver.repositories;

import com.example.gymserver.models.PClassDetails;
import com.example.gymserver.models.Program;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PClassDetailsRepository extends JpaRepository<PClassDetails, Long> {
    @Query("SELECT p FROM PClassDetails p WHERE p.id.programId = ?1")
    Optional<List<PClassDetails>> findDetailsByProgramId(Long programId);

    @Query("SELECT p FROM PClassDetails p WHERE p.id.programId = ?1 AND p.id.classId = ?2")
    Optional<PClassDetails> findDetailsByProgramIdAndClassId(Long programId, Long classId);
}
