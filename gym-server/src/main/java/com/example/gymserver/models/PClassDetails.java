package com.example.gymserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Setter
@Getter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PClassDetails {
    @EmbeddedId
    private PClassDetailsKey id;

    @JsonIgnore
    @ManyToOne
    @MapsId("programId")
    @JoinColumn(name = "programId")
    private Program program;

    @ManyToOne
    @MapsId("classId")
    @JoinColumn(name = "classId")
    private Class programClass;


    int noOfClasses;

}
