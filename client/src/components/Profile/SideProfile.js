import { useState,useEffect } from "react";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import TextField from '@mui/material/TextField';


const Input = styled("input")({
  display: "none",
});
export default function SideProfile() {

  const {name , setName} = useState("farida");
  const {mobilePhone ,setMobilePhone} = useState("2685245624862");

  useEffect(()=>{
    //fetch the data to show userName and phone number
    },[]);
  
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      margin={5}
      spacing={3}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
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
          sx={{ width: 100, height: 100 }}
        />{" "}
      </Badge>
      <h1 >Name</h1>
      <TextField              
                margin="dense"
                fullWidth
                
               label= {name}
 
              />
 <h1 >MobilePhone</h1>
      <TextField              
                margin="dense"
                fullWidth
                
               defaultValue= {mobilePhone}
 
              />
      
    </Stack>
  );
}
