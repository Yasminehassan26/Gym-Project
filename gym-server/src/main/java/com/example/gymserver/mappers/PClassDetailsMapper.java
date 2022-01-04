package com.example.gymserver.mappers;

import com.example.gymserver.dto.PClassDetailsDTO;
import com.example.gymserver.models.PClassDetails;

import java.util.ArrayList;
import java.util.List;

public class PClassDetailsMapper {

    public static List<PClassDetailsDTO> toPClassDetailsDTO(List<PClassDetails> pClassDetailsList){
        List<PClassDetailsDTO> classesDetailsDTOS = new ArrayList<>();
        for (PClassDetails pClassDetails : pClassDetailsList){
            PClassDetailsDTO pClassDetailsDTO = PClassDetailsDTO.builder()
                    .className(pClassDetails.getProgramClass().getClassType())
                    .noOfClasses(pClassDetails.getNoOfClasses())
                    .description(pClassDetails.getProgramClass().getDescription())
                    .build();
            classesDetailsDTOS.add(pClassDetailsDTO);
        }
        return classesDetailsDTOS;
    }


}
