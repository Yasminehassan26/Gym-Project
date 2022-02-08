package com.example.gymserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.transaction.Transactional;
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

    @Column(name= "used")
    private boolean used;


    public void reserveSession() {
        this.sessionsRemaining--;
        this.used = true;
    }

    public void unreserveSession(){
        this.sessionsRemaining++;
    }
}
