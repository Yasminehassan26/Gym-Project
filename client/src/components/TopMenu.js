import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
export default function TopMenu({ history }) {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleRoute = (text) => {
    if (text === "About") {
      history.push("/");
    } else if (text === "Programs") {
      history.push("/AllPrograms");
    } else if (text === "Sessions") {
      history.push("/AllSessions");
    } else if (text === "Tips") {
      history.push("/AllTips");
    }
    // else  if (text === "Trainers") {
    //   history.push("/Trainers");
    // }
    // else  if (text === "Shop") {
    //   history.push("/Shop");
    // }
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["About", "Programs", "Sessions", "Tips", "Trainers", "Shop"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              sx={{ bgcolor: "#cc1b85" }}
              onClick={() => handleRoute(text)}
            >
              <ListItemIcon>
                <FitnessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer("top", true)}
      >
        <MenuIcon />
      </IconButton>{" "}
      <Drawer
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {list("top")}
      </Drawer>
    </div>
  );
}
