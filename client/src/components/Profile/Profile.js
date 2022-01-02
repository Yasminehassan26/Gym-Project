import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import UseFetchPost from "../../api/UseFetchPost";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import ProfileActivities from "./ProfileActivities"

import { styled } from "@mui/material/styles";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Input = styled("input")({
  display: "none",
});
export default function Profile() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    mobile: "",
    birthdate: "",
    question: "",
    answer: "",
  });
  const [error, setError] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState("");
  const [schedule, setSchedule] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };
  const handleSchedule = () => {
    setSchedule(!schedule);
  };
  return (
    <div>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        onClick={() => setOpen(true)}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#cc1b85" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              My Profile
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid item component={Paper} elevation={6} square>
                  <Box
                    sx={{
                      my: 8,
                      mx: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={
                        <label htmlFor="icon-button-file">
                          <Input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                          />
                          <IconButton
                            style={{ color: "#cc1b85" }}
                            aria-label="upload picture"
                            component="span"
                          >
                            <PhotoCamera />
                          </IconButton>
                        </label>
                      }
                    >
                      <Avatar
                        alt="User"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 100, height: 100, color: "#cc1b85" }}
                      />{" "}
                    </Badge>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <h4>First Name</h4>
                          <TextField
                            autoComplete="fname"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <h4>Last Name</h4>
                          <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <h4>Username</h4>
                          <TextField
                            disabled
                            fullWidth
                            id="userName"
                            label="Username"
                            name="username"
                            autoComplete="username"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <h4>Password</h4>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <h4>First Name</h4>
                          <TextField
                            autoComplete="fname"
                            name="mobile"
                            required
                            fullWidth
                            id="firstName"
                            label="Mobile Number"
                            autoFocus
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <h4>Birthdate</h4>
                          <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            name="birthdate"
                            defaultValue="2022-01-01"
                            sx={{ width: 267 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <h4>Question</h4>
                          <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">
                              Question
                            </InputLabel>
                            <Select
                              required
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={state.question}
                              name="question"
                              label="Question"
                              onChange={handleChange("question")}
                            >
                              <MenuItem value={"what is your favorite pet?"}>
                                what is your favorite pet?
                              </MenuItem>
                              <MenuItem value={"what is your favorite color?"}>
                                what is your favorite color?
                              </MenuItem>
                            </Select>
                            <FormHelperText>
                              (choose security question to restore password)
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <h4>Answer</h4>
                          <TextField
                            required
                            fullWidth
                            id="answer"
                            label="answer"
                            name="answer"
                            autoComplete="answer"
                          />
                        </Grid>
                      </Grid>
                      {error === 1 && (
                        <Alert severity={type}>warning — {errorMessage}</Alert>
                      )}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
            <ProfileActivities/>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
