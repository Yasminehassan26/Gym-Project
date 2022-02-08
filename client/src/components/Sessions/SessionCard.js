import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";

import {ReactSession} from 'react-client-session';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SessionCard({ session }) {
  const [expanded, setExpanded] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [alertState, setAlertState] = React.useState();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBookSession = () => {
    setAlert(false);
      console.log(ReactSession.get("user"));
      console.log("book clicked");
      if (typeof ReactSession.get("user") === 'undefined') {
        setAlertState(-3);
      } else {
        var data = {
          userId: ReactSession.get("user").Id,
          role: ReactSession.get("user").role,
          statusCode: 0,
        };
        console.log(data);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(data),
          redirect: "follow",
        };
        fetch(`http://localhost:8082/api/trainee/book-session/${ReactSession.get("user").userName}/${session.sessionId}`, requestOptions)
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
            if(data === '0'){
              window.location.reload();
            }
            setAlertState(parseInt(data));
            setAlert(true);
          })
          .catch((error) => console.log("error", error));
      }
      //send to back end user id and show alert booked successfully any
      //should check first the user id if it is n't null as if it is don't send a request to the backend
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "rgba(219, 138, 138, 0.3)",
        color: "white",
        secondaryColor: "white",
      }}
    >
      <CardHeader
        sx={{ color: "white" }}
        avatar={
          <Avatar sx={{ bgcolor: "#cc1b85" }} aria-label="recipe">
            {session.sessionId}
          </Avatar>
        }
        title={session.name}
        subheader={
          <Typography style={{ color: "white", fontSize: 14 }}>
            {session.date.substr(0,session.date.indexOf('T'))}
          </Typography>
        }
      />

      <CardContent>
        <Typography variant="body2" color="white">
          {"Number Of Attendence: " +
            session.attendee.substr(0, session.attendee.indexOf('/')) +
            " Out Of: " +
            session.attendee.substr(session.attendee.indexOf('/')+1, session.attendee.length)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {session.attendee.substr(0, session.attendee.indexOf('/')) < session.attendee.substr(session.attendee.indexOf('/')+1, session.attendee.length) && (
          <Button
            variant="contained"
            disableElevation
            style={{
              backgroundColor: "#cc1b85",
              border: "solid",
              marginRight: 10,
            }}
            onClick={handleBookSession}
          >
            BOOK
          </Button>
        )}
        {session.attendee.substr(0, session.attendee.indexOf('/')) === session.attendee.substr(session.attendee.indexOf('/')+1, session.attendee.length) && (
          <Button
            disabled
            variant="contained"
            disableElevation
            style={{
              backgroundColor: "#cc1b85",
              border: "solid",
              marginRight: 10,
            }}
          >
            BOOK
          </Button>
        )}

        {alert && alertState === 0 && (
          <Alert severity="success">Booked Successfully!!</Alert>
        )}
        {alert && alertState === -1 && (
          <Alert severity="error">Sorry didn't book a program yet !!</Alert>
        )}
        {alert && alertState === -2 && (
          <Alert severity="error">
            Sorry Remaining sessions of that class in your program ended !!
          </Alert>
        )}
        {alert && alertState === -3 && (
          <Alert severity="error">
            Go Register First.
          </Alert>
        )}
        {alert && alertState === -4 && (
          <Alert severity="error">
            You already bookeed this session before !!
          </Alert>
        )}
        {alert && alertState === -5 && (
          <Alert severity="error">
            Session full !!
          </Alert>
        )}
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
        <CardContent sx={{ backgroundColor: "rgba(219, 138, 138, 0.3)" }}>
          <Typography paragraph>Session Detatils:</Typography>

          <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem>
              <ListItemText
                primary="Trainer Name:"
                secondary={
                  <Typography style={{ color: "white", fontSize: 14 }}>
                    {session.trainerName}
                  </Typography>
                }
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Start Time:"
                secondary={
                  <Typography style={{ color: "white", fontSize: 14 }}>
                    {session.date.substr(session.date.indexOf('T')+1,session.date.length)}
                  </Typography>
                }
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="End Time:"
                secondary={
                  <Typography style={{ color: "white", fontSize: 14 }}>
                    {session.endTime.substr(session.date.indexOf('T')+1,session.endTime.length)}
                  </Typography>
                }
              />
            </ListItem>
            <Divider />
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
