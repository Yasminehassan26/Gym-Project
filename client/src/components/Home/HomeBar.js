import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const HomeBar = () => {
  const pages = [
    "About",
    "Trainers",
    "Events",
    "Offers",
    "Programs",
    "Classes",
    "Healty Diets",
    "Workout Tips",
  ];
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
