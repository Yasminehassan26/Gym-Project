package com.example.gymserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Setter
@Getter
public class PClassFollowUp {
    @EmbeddedId
    private PClassFollowUpKey id;

    @JsonIgnore
    @ManyToOne
    @MapsId("traineeId")
    @JoinColumn(name = "traineeId")
    private Trainee trainee;

    @ManyToOne
    @MapsId("programId")
    @JoinColumn(name = "programId")
    private Program program;

    @ManyToOne
    @MapsId("classId")
    @JoinColumn(name = "classId")
    private Class programClass;

    @Column(name = "sessionsRemaining")
    private Integer sessionsRemaining;

    @Column(name= "EndDate")
    private LocalDate endDate;


}
