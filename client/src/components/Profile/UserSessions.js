import * as React from "react";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import BoltIcon from "@mui/icons-material/Bolt";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {ReactSession} from 'react-client-session';
//import Sessions from "./Sessions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
export default function UserSessions({Sessions}) {
  const [sessions, setSessions] = useState(Sessions);
  const handleRemove = (session) => {
  
   
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {sessions.map((session) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#cc1b85" }}>
              <BoltIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={session.name} secondary={session.date} />
          <IconButton onClick={handleRemove(session)} color="secondary" aria-label="add an alarm">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}
