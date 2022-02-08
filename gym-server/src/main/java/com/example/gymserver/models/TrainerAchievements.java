package com.example.gymserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Table
@Setter
@Getter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TrainerAchievements {
    @Id
    @SequenceGenerator(
            name = "achievement_sequence",
            sequenceName = "achievement_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "achievement_sequence"
    )

    @Column(name = "achievementId")
    private Long id;

    @Column(name = "Description")
    private String description;

    @Column(name = "Date")
    private String date;

    @JsonIgnore
    @ManyToOne
    @MapsId("trainerId")
    @JoinColumn(name = "trainerId")
    private Trainer trainer;
}
