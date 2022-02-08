package com.example.gymserver.models;

import lombok.*;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table
@Setter
@Getter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Session {
    @Id
    @SequenceGenerator(
            name = "session_sequence",
            sequenceName = "session_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "session_sequence"
    )

    @Column(name="sessionId",
            nullable = false)

    private Long id;

//    @ManyToOne
//    @JoinColumn(
//            name = "userId",
//            nullable = false,
//            referencedColumnName = "userId",
//            foreignKey = @ForeignKey(
//                    name = "userIdFK"
//            )
//    )
//    private User user;

    @Column(name="startTime",
            nullable = false)
    private LocalDateTime startTime;
    @Column(name="endTime",
            nullable = false)
    private LocalDateTime endTime;
    @Column(name="noOfAttendees",
            nullable = false)
    private Integer noOfAttendees;
    @Column(name="maxNoOfAttendees",
            nullable = false)
    private Integer maxNoOfAttendees;


    @ManyToOne
    @JoinColumn(
            name = "classId",
            nullable = false,
            referencedColumnName = "classId",
            foreignKey = @ForeignKey(
                    name = "classIdFK"
            )
    )
    private Class programClass;


    public void addAttendee() {
        noOfAttendees++;
    }

    public void removeAttendee(){ noOfAttendees--;}

    public boolean isFull() {
        return this.noOfAttendees == this.maxNoOfAttendees;
    }
}
