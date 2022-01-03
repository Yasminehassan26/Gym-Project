import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SideMenu from "./Profile/SideMenu";

import AssignmentIndSharpIcon from "@mui/icons-material/AssignmentIndSharp";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#cc1b85",
  backgroundColor: "#ffffff",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "#AF036E",
  },
}));
export default function Navbar({ history }) {
  const [currentUser, setCurrentUser] = useState(1);

  const handleRoute = (text) => {
    if (text === "Registration") {
      history.push("/Registration");
    } else history.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#cc1b85" }}>
        <Toolbar>
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
            {currentUser !== -1 && <SideMenu history={history} />}
            {
              currentUser === -1 && (
                <ColorButton
                  startIcon={<AssignmentIndSharpIcon />}
                  onClick={() => handleRoute("Registration")}
                >
                  {" "}
                  Registration
                </ColorButton>
              )
              //  <SideMenu  history={history} input={['SignIn','SignUp','SignOut']} icons={[<LoginSharpIcon/>,
              // <AssignmentIndSharpIcon/>,<LogoutSharpIcon/>]} />
            }
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
