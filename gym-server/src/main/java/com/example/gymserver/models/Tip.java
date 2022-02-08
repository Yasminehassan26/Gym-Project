package com.example.gymserver.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Setter
@Getter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Tip {

    @Id
    @SequenceGenerator(
            name = "healthTip_sequence",
            sequenceName = "tip_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "tip_sequence"
    )
    @Column(name="TipId",
            nullable = false)

    private Long id;

    @Column(name = "Title")
    private String title;

    @Column(name = "Header")
    private String header;

    @Column(name = "Details")
    private String details;

    @Column(name = "Category")
    private String category;
}
