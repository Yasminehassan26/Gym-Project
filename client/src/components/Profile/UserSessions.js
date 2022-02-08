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
import {removeSessions,getSession} from "../../api/ProfileApi";
import Alert from "@mui/material/Alert";

export default function UserSessions({Sessions}) {
  const [sessions, setSessions] = useState(Sessions);
  const [error, setError] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleRemove = (session) => {
    var values = {
      userId: ReactSession.get("user").Id,
      role: ReactSession.get("user").role,
      statusCode: 0,
    };
    removeSessions(values,ReactSession.get("user").userName,session.sessionId).then((data) => {
      
    });
    getSession(values, ReactSession.get("user").userName).then((session) => {
      console.log(session);
      setSessions(session);
    });
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
          <IconButton onClick={()=>handleRemove(session)} style={{ color: "#cc1b85" }} aria-label="add an alarm">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}
 

