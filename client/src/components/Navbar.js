import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Profile from "./Profile/Profile";
import SideMenu from "./SideMenu";
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';

export default function Navbar({history}) {
  
  const [currentUser, setCurrentUser] = useState(-1);
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "#cc1b85" }}>
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Gym Website
          </Typography>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {currentUser !=-1 && <Profile />}
            {currentUser == -1 && <SideMenu  history={history} input={['SignIn','SignUp','SignOut']} icons={[<LoginSharpIcon/>,
            <AssignmentIndSharpIcon/>,<LogoutSharpIcon/>]} />}
            
           
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
