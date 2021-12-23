import * as React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Input = styled("input")({
  display: "none",
});
export default function SideProfile() {
  const [name, setName] = useState("dida");
  const [mobilePhone, setMobilePhone ] = useState("2685245624862");
  const[schedual,setSchedual] = useState(false)

  const[data,setData] = useState([]);
  const[isPending,setIsPending] = useState(true);
  const[error,isError] = useState("");
   
  // data ,isPending ,isError = useFetch()
  const handleSchedual = () => {
    setSchedual(!schedual);
  };
  useEffect(() => {
    //fetch the data to show userName and phone number
  }, []);

  return (
   
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      margin={5}
      spacing={3}
    >
       {isPending &&  <Box sx={{ display: 'flex' }}> <CircularProgress style={{color : "#cc1b85" }}/> </Box> }
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              style={{color:"#cc1b85"}}
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        }
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100 ,color:"#cc1b85"}}
        />{" "}
      </Badge>
      <Grid        
        direction="row"
        style={{ left : 0 , marginLeft: "30%" }}
        container
        spacing={1}>
        <Grid  >
          <Grid
           direction = "column"
           container
         spacing={1} >
      <h4>First Name</h4>
      <TextField label="First Name" defaultValue={name} />
      </Grid  >
      <Grid >
      <h4>Second Name</h4>
      <TextField label="Second Name" defaultValue={name} />
      </Grid>
      <Grid >
      <h4>User Name</h4>
      <TextField label="Second Name" defaultValue={name} />
      </Grid>
      <Grid >
      <h4>MobilePhone</h4>

      <TextField label="Mobile Phone" defaultValue={mobilePhone} />
      </Grid>
      <Grid >
      <h4>Question</h4>

      <TextField label="Question" defaultValue={mobilePhone} />
      </Grid>
      <Grid >
      <h4>answer</h4>

      <TextField label="Answer" defaultValue={mobilePhone} />
      </Grid>
      </Grid>
      <Grid
      direction = "column"
      style={{marginLeft:"30%"}}>
      <Button  variant="contained" style={{mt: 3, mb: 2 , backgroundColor : "#cc1b85",border:"solid"}} onClick={handleSchedual}> Show Schedual</Button>
      {schedual && <div style={{marginTop : "10%"}}>The Schedual is empty right now </div>}
      </Grid>
      </Grid>
    </Stack>
  );
}
