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
    if (alert === false) {
      //send to back end user id and show alert booked successfully any
      //should check first the user id if it is n't null as if it is don't send a request to the backend
      const res = -2;
      setAlertState(res);
      setAlert(true);

      console.log("book clicked");
    }
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
            {session.date}
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

        {alert && alertState === 1 && (
          <Alert severity="success">Booked Successfully!!</Alert>
        )}
        {alert && alertState === -1 && (
          <Alert severity="error">Sorry your program duration ended !!</Alert>
        )}
        {alert && alertState === -2 && (
          <Alert severity="error">
            Sorry Remaining sessions of that class in your program ended !!
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
                    {session.startTime}
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
                    {session.endTime}
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
