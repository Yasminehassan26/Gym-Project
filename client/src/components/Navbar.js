import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Profile from "./Profile/Profile";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import  Cart  from "./Shop/Cart";
import AssignmentIndSharpIcon from "@mui/icons-material/AssignmentIndSharp";
import TopMenu from "./TopMenu";
import {ReactSession} from 'react-client-session';
import IconButton from '@mui/material/IconButton';

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#cc1b85",
  backgroundColor: "#ffffff",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "#AF036E",
  },
}));
export default function Navbar({ history }) {
  //const [currentUser, setCurrentUser] = useState(ReactSession.get("userId"));

  const handleRoute = (text) => {
    if (text === "Registration") {
      history.push("/Registration");
    } else history.push("/");
  };
  //this.forceUpdate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#cc1b85" }}>
        <Toolbar>
          <TopMenu history={history} />
          <Button
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            onClick={() => handleRoute("")}
          >
            Gym Website
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {typeof ReactSession.get("user") === "undefined" && 
              <ColorButton
                  startIcon={<AssignmentIndSharpIcon />}
                  onClick={() => handleRoute("Registration")}
                >
              
                  Registration
                </ColorButton>
          }
             {typeof ReactSession.get("user") !== "undefined" && <Cart />}

             {typeof ReactSession.get("user") !== "undefined" && <Profile />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
