import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Profile from "./Profile/Profile";
import SideMenu from "./Profile/SideMenu";
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';



const ColorButton = styled(Button)(({ theme }) => ({
  color:"#cc1b85",
  backgroundColor: '#ffffff',
  '&:hover': {
    color:'#ffffff',
    backgroundColor: "#AF036E",
  },
}));
export default function Navbar({history}) {
  
  const [currentUser, setCurrentUser] = useState(0);
 
  const handleRoute = () => {
 
    history.push("/Registration");
  
};
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
            {currentUser !==-1 && <SideMenu history={history} />}
            {currentUser === -1 && <ColorButton  startIcon= {<AssignmentIndSharpIcon/>}  onClick={() => handleRoute()} > Registration</ColorButton>
            //  <SideMenu  history={history} input={['SignIn','SignUp','SignOut']} icons={[<LoginSharpIcon/>,
            // <AssignmentIndSharpIcon/>,<LogoutSharpIcon/>]} />
            }
            
           
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
