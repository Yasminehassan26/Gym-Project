package com.example.gymserver.models;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Setter
@Getter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Trainer {
    @Id
    @SequenceGenerator(
            name = "trainer_sequence",
            sequenceName = "trainer_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "trainer_sequence"
    )

    @Column(name = "trainerId")
    private Long id;
    @Column(name = "FirstName" ,nullable = false)
    private String firstName;
    @Column(name = "LastName", nullable = false)
    private String lastName;
    @Column(name = "bio")
    private String bio;
    @Column(name = "phoneNumber")
    private String phoneNumber;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "TrainerSports",
            joinColumns = @JoinColumn(name = "trainerId"),
            inverseJoinColumns = @JoinColumn(name = "Name"))
    List<Sports> sports;

    @OneToMany(
            mappedBy = "trainer",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            fetch = FetchType.LAZY
    )
    private List<TrainerAchievements> achievements = new ArrayList<>();
}
