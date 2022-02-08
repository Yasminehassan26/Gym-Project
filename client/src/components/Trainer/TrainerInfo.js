import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        background: `linear-gradient(to left,${"rgba(184, 29, 112, 0.96)"}, ${"gray"})`
    };
}
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export default function TrainerInfo({sports,achievements}) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div >
            <Button 
                variant="contained"
                disableElevation
                style={{
                  color:"white",
                  backgroundColor: "#cc1b85",
                  border: "solid",
                  marginRight: 10,
                }}
            onClick={handleOpen}>
                Open Trainer Info
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
        <div style={modalStyle} className={classes.paper}>
        
          <Typography paragraph sx={{marginLeft:20 ,color:"white" }}>Trainer Info</Typography>
          
          <Typography paragraph sx={{ color:"white"}}>Trainer Sports:</Typography>

         {sports.map((classItem) => (
           <List sx={{ width: "100%", maxWidth: 360, color: "white", backgroundColor:"rgba(219, 138, 138, 0.3)" }}>
             <ListItem>
               <ListItemText
                 primary={"Sport: " + classItem.sport}
           
               />
             </ListItem>
             <Divider />
           </List>
         ))}
             <Typography paragraph sx={{color:"white"}}>Trainer Achievements:</Typography>
         
         {achievements.map((classItem) => (
           <List sx={{ width: "100%", maxWidth: 360, color: "white",backgroundColor:"rgba(219, 138, 138, 0.3)" }}>
             <ListItem>
               <ListItemText
                 primary={"Achievement: " + classItem.achievement}
                 secondary={
                   <div>
                     <Typography style={{ color: "white", fontSize: 14 }}>
                       {" "}
                       {"Date of the achievement: " + classItem.date}
                     </Typography>
                    
                   </div>
                 }
               />
             </ListItem>
             <Divider />
           </List>
         ))}
         </div>
               
          
            </Modal>
        </div>
    );
}