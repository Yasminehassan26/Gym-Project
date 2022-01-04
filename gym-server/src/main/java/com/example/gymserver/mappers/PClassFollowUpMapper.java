package com.example.gymserver.mappers;

import com.example.gymserver.dto.ClassFollowUpDTO;
import com.example.gymserver.dto.ProgramFollowUpDTO;
import com.example.gymserver.models.PClassFollowUp;

import java.util.ArrayList;
import java.util.List;

public class PClassFollowUpMapper {
    public static ProgramFollowUpDTO toProgramFollowUpDTO(List<PClassFollowUp> followUps){
        ProgramFollowUpDTO programFollowUp = new ProgramFollowUpDTO();
        programFollowUp.setTitle(followUps.get(0).getProgram().getName());
        List<ClassFollowUpDTO> classFollowUpDTOS = new ArrayList<>();
        for(PClassFollowUp followUp : followUps){
            ClassFollowUpDTO classFollowUp = new ClassFollowUpDTO(followUp.getProgramClass().getClassType()
                    , String.valueOf(followUp.getSessionsRemaining()));
            classFollowUpDTOS.add(classFollowUp);
        }
        programFollowUp.setClassesFollowUp(classFollowUpDTOS);
        return programFollowUp;
    }
}
