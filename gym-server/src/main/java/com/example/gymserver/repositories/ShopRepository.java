package com.example.gymserver.repositories;

import com.example.gymserver.models.Product;
import com.example.gymserver.models.Program;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ShopRepository  extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE p.category = ?1")
    Optional<List<Product>> findProductsByCategory(String category);
}
