package com.example.gymserver.repositories;

import com.example.gymserver.models.Class;
import com.example.gymserver.models.Program;
import com.example.gymserver.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ClassRepository extends JpaRepository<Class, Long> {
    @Query("SELECT c FROM Class c WHERE c.classType = ?1")
    Optional<Class> findClassByType(String classType);
}
