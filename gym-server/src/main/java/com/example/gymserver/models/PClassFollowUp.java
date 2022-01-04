package com.example.gymserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Setter
@Getter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
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


    public void reserveSession() {
        this.sessionsRemaining--;
    }
}
