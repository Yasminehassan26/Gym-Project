package com.example.gymserver.models;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class PClassDetailsKey implements Serializable {
    @Column(name = "programId",
            nullable = false)
    Long programId;

    @Column(name = "classId",
            nullable = false)
    Long classId;

//    @Override
//    public boolean equals(Object o) {
//        if (o == null) return false;
//        if (this == o) return true;
//        if (!(o instanceof PClassDetailsKey)) return false;
//        PClassDetailsKey that = (PClassDetailsKey) o;
//        return Objects.equals(programId, that.programId) &&
//                Objects.equals(classId, that.classId);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(programId, classId);
//    }
}
