import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProgramCard({program}) {
  const [expanded, setExpanded] = React.useState(false);
  const [programDetails , setProgramDetails] = React.useState([])
  const [alert, setAlert] = React.useState(false);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
    //call back end to get the program details
  const proD = [{className :"yoga" , numberOfSessions : 3},
      {className :"zomba" , numberOfSessions : 2},
      {className :"yoga" , numberOfSessions : 4}];
      setProgramDetails(proD);
      console.log(programDetails);
  };
  
  const handleBookProgram =() =>{
    if(alert === false){
    setAlert(true);
    console.log("book clicked");}
//send to back end user id and show alert booked successfully any
  //should check first the user id if it is n't null as if it is don't send a request to the backend
  } ;

  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'rgba(219, 138, 138, 0.3)',color:"white" }}>
      <CardHeader sx={{color:"white",fontStyle : "bold"}}
        avatar={
          <Avatar sx={{ bgcolor: "#cc1b85" }} aria-label="recipe">
            {program.id}
          </Avatar>
        }
      
        title={program.name}
        subheader=  {
          <Typography style={{ color: "white",fontSize:14  }}> {program.Duration}
          </Typography> }
      />
    
      <CardContent>
        <Typography variant="body2" color="white">
        {program.Description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       <Button variant="contained" disableElevation style={{backgroundColor : "#cc1b85" ,border : "solid",marginRight :10}} onClick={handleBookProgram}>BOOK</Button>
      {alert && <Alert severity="success">Booked Successfully!!</Alert>} 
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{backgroundColor:'rgba(219, 138, 138, 0.3)'}}>
          <Typography paragraph>Prgram Detatils:</Typography>
          
          {programDetails.map(classItem => (
            <List sx={{ width: '100%', maxWidth: 360,color:"white" }}>
              <ListItem>       
            <ListItemText primary={"Class: " +classItem.className} secondary=
            {
              <Typography style={{ color: "white",fontSize:14  }}> {"Number of sessions: "+classItem.numberOfSessions}
              </Typography> }/>
          
                </ListItem>
                   <Divider  />
                   </List>
      ))}

           
      
         
        </CardContent>
      </Collapse>
    </Card>
  );
}