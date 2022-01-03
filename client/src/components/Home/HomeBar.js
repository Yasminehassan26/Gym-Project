import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const HomeBar = ({history}) => {
  const pages = [
    "About",
    "Programs",
    "Sessions",
    "Tips",
    "Trainers",
    "Shop"
  ];
  const handleRoute = (text) => {
    if (text === "Programs") {
      history.push("/AllPrograms");
    } 
    else  if (text === "Sessions") {
      history.push("/AllSessions");
    } 
    else  if (text === "Tips") {
      history.push("/AllTips");
    } 
    // else  if (text === "Trainers") {
    //   history.push("/Trainers");
    // } 
    // else  if (text === "Shop") {
    //   history.push("/Shop");
    // } 
  };
  return (
    <div style={{ position: "static" }}>
      <Box sx={{ flexGrow: 1 }} />
      <AppBar position="static" style={{ backgroundColor: "#cc1b85" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleRoute({page})}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HomeBar;
