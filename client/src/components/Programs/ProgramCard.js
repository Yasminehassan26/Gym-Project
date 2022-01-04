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

import { ReactSession } from 'react-client-session';

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

export default function ProgramCard({ program }) {
  const [expanded, setExpanded] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [alertData, setAlertData] = React.useState();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBookProgram = () => {
    if (alert === false) {
      setAlert(true);
      console.log("book clicked");
      if (typeof ReactSession.get("user") === 'undefined') {
        setAlertData(-1);
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
        fetch(`http://localhost:8082/api/trainee/book-program/${ReactSession.get("user").userName}/${program.programId}`, requestOptions)
          .then((response) => response.text())
          .then((data) => {
            console.log(data);
            setAlertData(1);
          })
          .catch((error) => console.log("error", error));
      }
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
      }}
    >
      <CardHeader
        sx={{ color: "white", fontStyle: "bold" }}
        avatar={
          <Avatar sx={{ bgcolor: "#cc1b85" }} aria-label="recipe">
            {program.programId}
          </Avatar>
        }
        title={program.name}
        subheader={
          <Typography style={{ color: "white", fontSize: 14 }}>
            {"Duration: "}
            {program.duration}
          </Typography>
        }
      />

      <CardContent>
        <Typography variant="body2" color="white">
          {program.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          disableElevation
          style={{
            backgroundColor: "#cc1b85",
            border: "solid",
            marginRight: 10,
          }}
          onClick={handleBookProgram}
        >
          BOOK
        </Button>
        {alertData === 1 && alert && <Alert severity="success">Booked Successfully!!</Alert>}
        {alertData === -1 && alert && <Alert severity="error">Go Register First.</Alert>}
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
          <Typography paragraph>Prgram Detatils:</Typography>

          {program.classesDetails.map((classItem) => (
            <List sx={{ width: "100%", maxWidth: 360, color: "white" }}>
              <ListItem>
                <ListItemText
                  primary={"Class: " + classItem.className}
                  secondary={
                    <div>
                      <Typography style={{ color: "white", fontSize: 14 }}>
                        {" "}
                        {"Number of sessions: " + classItem.noOfClasses}
                      </Typography>
                      <Typography style={{ color: "white", fontSize: 14 }}>
                        {" "}
                        {"Description: " + classItem.description}
                      </Typography>
                    </div>
                  }
                />
              </ListItem>
              <Divider />
            </List>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
