package com.example.gymserver.models;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Setter
@Getter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PClassFollowUpKey implements Serializable {
    @Column(name = "programId",
            nullable = false)
    private Long programId;

    @Column(name = "classId",
            nullable = false)
    private Long classId;

    @Column(name = "traineeId",
            nullable = false)
    private Long traineeId;
}
