import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SideMenu from "./Profile/SideMenu";

import AssignmentIndSharpIcon from "@mui/icons-material/AssignmentIndSharp";
import TopMenu from "./TopMenu";
import {ReactSession} from 'react-client-session';

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
            <SideMenu history={history} />
              <ColorButton
                  startIcon={<AssignmentIndSharpIcon />}
                  onClick={() => handleRoute("Registration")}
                >
                  {" "}
                  Registration
                </ColorButton>
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
