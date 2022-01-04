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
//import Sessions from "./Sessions";

export default function UserSessions() {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    var values = {
      userId: ReactSession.get("user").Id,
      role: ReactSession.get("user").role,
      statusCode: 0,
    };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(values);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      body: JSON.stringify(values),
      redirect: "follow",
    };

    fetch(`http://localhost:8081/api/user/profile/${ReactSession.get("user").userName}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSessions(data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {sessions.map((session) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#cc1b85" }}>
              <BoltIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={session.title} secondary={session.date} />
        </ListItem>
      ))}
    </List>
  );
}
