import * as React from "react";
import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import Data from "./Data";
import Stack from "@mui/material/Stack";
import {ReactSession} from 'react-client-session';

export default function UserPrograms({Programs}) {
  const [programs, setPrograms] = useState(Programs);
    
  return (
    <div>
      {programs.map((program) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{program.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {/* {program.content} */}

              <Stack spacing={1} alignItems="center">
                {program.classesFollowUp.map((content) => (
                  <Stack direction="row" spacing={1}>
                    <Chip
                      color="secondary"
                      label={content.name}
                      icon={<FitnessCenterIcon />}
                    />
                    <Chip label={content.attendedSessions} color="success" />
                  </Stack>
                ))}
              </Stack>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
