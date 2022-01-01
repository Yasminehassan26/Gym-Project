import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import UseFetchPost from "../../api/UseFetchPost";
import validator from "validator";

export default function SignUp({ history }) {
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
  const [type, setType] = useState("warning");

  //go to backend

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let check = 0;
    if (
      data.get("firstName") === "" ||
      data.get("lastName") === "" ||
      data.get("password") === "" ||
      data.get("username") === "" ||
      data.get("birthdate") === "" ||
      data.get("mobile") === "" ||
      data.get("question") === "" ||
      data.get("answer") === "" ||
      data.get("birthdate") === ""
    ) {
      setError(1);
      setErrorMessage("Please fill all fields!");
      setType("warning");
      check = 1;
    }

    if (
      validator.isStrongPassword(data.get("password"), {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
    } else {
      setError(1);
      setErrorMessage("Please enter a strong password");
      setType("warning");

      check = 1;
    }

    if (check === 0) {
      console.log(data);
      var values = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        password: data.get("password"),
        userName: data.get("username"),
        birth_date: data.get("birthdate"),
        phoneNumber: data.get("mobile"),
        question: data.get("question"),
        answer: data.get("answer"),
        age: data.get(null),
      };

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(values),
        redirect: "follow",
      };

      fetch("http://localhost:8081/api/sign-up/trainee", requestOptions)
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          if (data === -1) {
            setError(1);
            setErrorMessage("UserName already exists !");
            setType("error");
            check = 1;
          } else {
            history.push("/");
          }
        })
        .catch((error) => console.log("error", error));
      var result = UseFetchPost(
        "http://localhost:8081/api/sign-up/trainee",
        data
      );
      console.log(result);
    }
  };
 

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#cc1b85" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
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
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#cc1b85" }}
            >
              Sign Up
            </Button>
            {error === 1 && (
              <Alert severity={this.type}>warning — {this.errorMessage}</Alert>
            )}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/featured/?healthy)",
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
}
