package com.example.gymserver.mappers;

import com.example.gymserver.dto.ProgramDTO;
import com.example.gymserver.models.Program;

public class ProgramMapper {
    public static ProgramDTO toProgramDTO(Program program){
        ProgramDTO programDTO = ProgramDTO.builder()
                .programId(program.getId())
                .name(program.getName())
                .price(String.valueOf(program.getPrice()))
                .classesDetails(PClassDetailsMapper.toPClassDetailsDTO(program.getPClassDetails()))
                .description(program.getDescription())
                .duration(String.valueOf(program.getDuration()))
                .build();
        return programDTO;
    }

    public static Program toProgram(ProgramDTO programDTO){
        return null;
    }
}
