import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SessionCard from "./SessionCard";
import { useState, useEffect } from "react";

const AllSessions = () => {
  //on opening the page this data should be fetched from the backend
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("http://localhost:8082/api/booking/sessions", requestOptions)
      .then((response) => response.json())
      .then((data)=>{
        setSessions(data);
      })
      .catch((error) => console.log("error", error));
  },[]);
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: {
          flex: 1,
          resizeMode: "cover", // or 'stretch'
        },
        backgroundImage: `url(${"https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=500"}`,
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ backgroundImage: `url(${Image})` }}
      >
        {sessions.map((session) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <SessionCard session={session} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AllSessions;
