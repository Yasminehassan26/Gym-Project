import * as React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MovieIcon from "@mui/icons-material/LocalMovies";
import Drawer from "@mui/material/Drawer";
import * as icons from '@material-ui/icons';
import Button from '@mui/material/Button';

const SideMenu = ({history,input,icons}) => {
    const [rightAnchor, setRightAnchor] = useState(false);

    const handleRoute=(text)=>{
      if(text==='SignIn'){
        history.push('/SignIn');
      }
      else if(text==='SignUp'){
        history.push('/SignUp');
      }
      else{
        history.push('/');
      }
    }


    const toggleDrawer = (open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
    
        setRightAnchor(open);
      };
      const list = (icons) => (
        <Box
        sx={{width:200 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List >
            {input.map((text, index) => (
<<<<<<< HEAD
             
=======
              <ListItem  button key={text} sx={{  bgcolor: '#f542d4' }} onClick={()=>handleRoute(text)} >
>>>>>>> 01bb6a8204ab9db7f826311814883ce0b98b5c24
                <ListItemIcon>
                  {text === 'SignIn' && icons[0]}
                  {text === 'SignUp' && icons[1]}
                  {text === 'SignOut' && icons[2]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      );
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
            <MenuIcon/>
     
        </IconButton>
        <Drawer 
          anchor="right"
          open={rightAnchor}
          onClose={toggleDrawer(false)}
        >
          {list(icons)}
        </Drawer>
      </div>
     );
}
 
export default SideMenu;