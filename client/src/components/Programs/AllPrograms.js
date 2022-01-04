import ProgramCard from "./ProgramCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {ReactSession} from 'react-client-session';
import { useState,useEffect } from "react";

const AllPrograms = () => {
  //on opening the page this data should be fetched from the backend
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("http://localhost:8082/api/booking/programs", requestOptions)
      .then((response) => response.json())
      .then((data)=>{
        setPrograms(data);
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
        backgroundImage: `url(${"https://images.unsplash.com/photo-1561729955-89357c733059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=800"}`,
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ backgroundImage: `url(${Image})` }}
      >
        {programs.map((program) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <ProgramCard program={program} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AllPrograms;
