import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import * as icons from "@material-ui/icons";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Profile from "./Profile";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

const SideMenu = ({ history }) => {
  const [rightAnchor, setRightAnchor] = useState(false);

  const handleRoute = (text) => {
    history.push("/");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setRightAnchor(open);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <AccountCircle />
      </IconButton>
      <Drawer anchor="right" open={rightAnchor} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 180, height: "10px" }}>
          <ListItem button sx={{ bgcolor: "#f542d4" }}>
            <Profile />
            <ListItemText primary="My Profile" />
          </ListItem>
          <ListItem
            button
            sx={{ bgcolor: "#f542d4" }}
            onClick={() => handleRoute("Sign Out")}
          >
            <LogoutSharpIcon />
            <ListItemText primary="Sign out" />
          </ListItem>
        </Box>
      </Drawer>
    </div>
  );
};

export default SideMenu;
