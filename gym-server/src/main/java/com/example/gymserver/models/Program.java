package com.example.gymserver.models;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "program")
@Setter
@Getter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Program {
    @Id
    @SequenceGenerator(
            name = "program_sequence",
            sequenceName = "program_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "program_sequence"
    )
    @Column(name = "programId",
            nullable = false)
    private Long id;
    @Column(name = "name", unique = true)
    private String name;
    @Column(name = "duration")
    private Integer duration;
    @Column(name = "price")
    private Float price;
    @Column(name = "description")
    private String description;

        @OneToMany(
            mappedBy = "program",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            fetch = FetchType.LAZY
    )
    private List<PClassDetails> pClassDetails = new ArrayList<>();
}
