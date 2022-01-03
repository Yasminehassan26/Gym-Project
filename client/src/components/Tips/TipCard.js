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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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

export default function TipCard({tip}) {
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
 
  };
  
 

  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'rgba(219, 138, 138, 0.3)',color:"white" }}>
      <CardHeader sx={{color:"white",fontStyle : "bold"}}
        avatar={
          <Avatar sx={{ bgcolor: "#cc1b85" }} aria-label="recipe">
            {tip.id}
          </Avatar>
        }
      
        title={tip.title}
     
      />
     <CardContent>
        <Typography variant="body2" color="white">
        {tip.description}
        </Typography>
      </CardContent>
   
      <CardActions disableSpacing>
     

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
          <Typography paragraph>Tip Detatils:</Typography>
          
   
          <Typography paragraph>{tip.details}</Typography>
           
      
         
        </CardContent>
      </Collapse>
    </Card>
  );
}