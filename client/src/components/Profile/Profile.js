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
import { useState, useEffect } from "react";
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
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import validator from "validator";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ProfileActivities from "./ProfileActivities";
import { styled } from "@mui/material/styles";
import { ReactSession } from "react-client-session";
import {
  getProfileInfo,
  getPrograms,
  getSession,
  updateUser,
} from "../../api/ProfileApi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Input = styled("input")({
  display: "none",
});
const ColorButton = styled(Button)(({ theme }) => ({
  color: "#cc1b85",
  backgroundColor: "#ffffff",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "#AF036E",
  },
}));
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
    showPassword: false,
  });
  const [error, setError] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState("");
  const [programs, setPrograms] = useState([]);
  const [sessions, setSessions] = useState([]);

  const handleClose = (event) => {
    setOpen(false);
  };
  const handleClickShowPassword = () => {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    //console.log(data);
    if (
      state.firstName === "" ||
      state.lastName === "" ||
      state.password === "" ||
      state.birthdate === "" ||
      state.mobile === "" ||
      state.question === "" ||
      state.answer === ""
    ) {
      setError(1);
      setErrorMessage("Please fill all fields!");
      setType("warning");
    } else {
      if (
        !validator.isStrongPassword(state.password, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        setError(1);
        setErrorMessage("Please enter a strong password");
        setType("warning");
      } else {
        var values = {
          userId: ReactSession.get("user").Id,
          firstName: state.firstName,
          lastName: state.lastName,
          userName: ReactSession.get("user").userName,
          password: state.password,
          birth_date: state.birthdate,
          phoneNumber: state.mobile,
          question: state.question,
          answer: state.answer,
          age: null,
          role: "trainee",
        };
        console.log(values);
        updateUser(values, ReactSession.get("user").userName);
      }
    }
  };
  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  useEffect(() => {
    if (typeof ReactSession.get("user") != "undefined") {
      var values = {
        userId: ReactSession.get("user").Id,
        role: ReactSession.get("user").role,
        statusCode: 0,
      };
      getProfileInfo(values, ReactSession.get("user").userName).then((data) => {
        console.log(data);
        var addData = {
          firstName: data.firstName,
          lastName: data.lastName,
          userName: data.userName,
          password: data.password,
          mobile: data.phoneNumber,
          birthdate: data.birth_date,
          question: data.question,
          answer: data.answer,
        };
        setState(addData);
      });
      getPrograms(values, ReactSession.get("user").userName).then((program) => {
        console.log(program);
        setPrograms(program);
      });
      getSession(values, ReactSession.get("user").userName).then((session) => {
        console.log(session);
        setSessions(session);
      });
    }
  }, []);

  return (
    <div>
      <ColorButton
        variant="outlined"
        startIcon={<AccountCircle color="secondary" />}
        onClick={() => setOpen(true)}
      >
        My Profile
      </ColorButton>
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
            <Button autoFocus color="inherit" onClick={handleSubmit}>
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
                            defaultValue={state.firstName}
                            onChange={handleChange("firstName")}
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
                            defaultValue={state.lastName}
                            autoComplete="lname"
                            onChange={handleChange("lastName")}
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
                            defaultValue={state.userName}
                            onChange={handleChange("userName")}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <h4>Password</h4>
                          {/* <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            defaultValue={state.password}
                            onChange={handleChange("password")}
                          /> */}
                          <FormControl
                            fullWidth
                            sx={{ m: 1, width: "25ch" }}
                            variant="outlined"
                          >
                            <InputLabel htmlFor="outlined-adornment-password">
                              Password
                            </InputLabel>
                            <OutlinedInput
                              fullWidth
                              name="password"
                              id="outlined-adornment-password"
                              type={state.showPassword ? "text" : "password"}
                              value={state.password}
                              onChange={handleChange("password")}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {state.showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="Password"
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <h4>Mobile number</h4>
                          <TextField
                            autoComplete="fname"
                            name="mobile"
                            required
                            fullWidth
                            id="mobile"
                            label="Mobile Number"
                            autoFocus
                            defaultValue={state.mobile}
                            onChange={handleChange("mobile")}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <h4>Birthdate</h4>
                          <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            name="birthdate"
                            defaultValue={state.birthdate}
                            sx={{ width: 267 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={handleChange("birthdate")}
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
                            defaultValue={state.answer}
                            onChange={handleChange("answer")}
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
              <ProfileActivities programs={programs} sessions={sessions} />
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
