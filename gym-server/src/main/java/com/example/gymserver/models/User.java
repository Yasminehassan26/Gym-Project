package com.example.gymserver.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Entity
@Table
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )

    @Column(name = "userId")
    private Long id;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(unique = true, nullable = false)
    private String userName;
    @Column(nullable = false)
    private String password;
    private LocalDate birth_date;
    private String phoneNumber;
    @Column(nullable = false)
    private String question;
    @Column(nullable = false)
    private String answer;
    @Column(nullable = false)
    private String role;
    @Transient
    private Integer age;

    @OneToOne(cascade=CascadeType.PERSIST, mappedBy = "user")
    @PrimaryKeyJoinColumn
    private Trainee trainee;

//    @OneToMany(
//            mappedBy = "user",
//            orphanRemoval = true,
//            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
//            fetch = FetchType.LAZY
//    )
//    private List<PClassFollowUp> pClassFollowUps = new ArrayList<>();
//
//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(
//            name = "sessionReservation",
//            joinColumns = @JoinColumn(name = "userId"),
//            inverseJoinColumns = @JoinColumn(name = "sessionId"))
//    Set<Session> sessions;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", birth_date=" + birth_date +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                ", role='" + role + '\'' +
                ", age=" + age +
                '}';
    }
}
