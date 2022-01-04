package com.example.gymserver.repositories;

import com.example.gymserver.models.Class;
import com.example.gymserver.models.PClassDetails;
import com.example.gymserver.models.PClassFollowUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PClassFollowUpRepository extends JpaRepository<PClassFollowUp, Long> {
    @Query("SELECT p FROM PClassFollowUp p WHERE p.id.traineeId = ?1")
    Optional<List<PClassFollowUp>> findFollowUpsByTraineeId(Long traineeId);

    @Query("SELECT p.program.id FROM PClassFollowUp p WHERE p.id.traineeId = ?1")
    Optional<List<Long>> findProgramsIdByTraineeId(Long traineeId);

    @Query("SELECT p FROM PClassFollowUp p WHERE p.id.traineeId = ?1 AND p.id.programId = ?2")
    Optional<List<PClassFollowUp>> findFollowUpsByTraineeAndProgram(Long traineeId, Long programId);
}
