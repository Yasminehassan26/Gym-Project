package com.example.gymserver.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Trainee implements Serializable {
    @Id
    @Column(name = "traineeId")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "traineeId")
    private User user;

    @OneToMany(
            mappedBy = "trainee",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            fetch = FetchType.LAZY
    )
    private List<PClassFollowUp> pClassFollowUps = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "sessionReservation",
            joinColumns = @JoinColumn(name = "traineeId"),
            inverseJoinColumns = @JoinColumn(name = "sessionId"))
    Set<Session> sessions;


    public Trainee(Long id){
        this.id = id;
    }

}
