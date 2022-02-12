import * as React from "react";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ReactSession } from 'react-client-session';
import Navbar from "../Navbar";

const theme = createTheme();

export default function SignInSide({ history }) {
  const [error, setError] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState("warning");
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const [forgetPassword, setForgetPassword] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let check = 0;
    if (data.get("password") === "" || data.get("username") === "") {
      setError(1);
      setErrorMessage("Please fill all fields!");
      setType("warning");
      check = 1;
    }
    if (check === 0) {
      var values = {
        userName: data.get("username"),
        password: data.get("password"),
      };
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      console.log(values);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(values),
        redirect: "follow",
      };

      fetch(`http://localhost:8082/api/auth/sign-in`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          if (res.statusCode === -1) {
            //wrong username
            setError(1);
            setErrorMessage("User Not Registered!!");
            setType("error");
            check = 1;
          } else if (res.statusCode === -2) {
            //wrong password
            setError(1);
            setErrorMessage("Wrong password!!");
            setType("error");
            check = 1;
          } else {
            var session = {
              userName: data.get("username"), Id: res.userId, role: res.role, cart: []
            };
            console.log(session);
            ReactSession.set("user", session);
            history.push("/");
            console.log(ReactSession.get("user"));
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange1 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleForgetPassword = (event) => {
    console.log(values.username);
    if(values.username === "") {
      setError(1);
      setErrorMessage("Please enter username!");
      setType("warning");
     
    }
    else{
    setForgetPassword(true);
    //call to the back end to get the question  and set them
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://localhost:8082/api/auth/get-user-question/${values.username}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setQuestion(data);
      })
      .catch((error) => console.log("error", error));
    }
  };
  const handleAnswer = (event) => {
    //send the answer to the back end and show the result
  
    if(values.username === "") {
      setError(1);
      setErrorMessage("Please enter username!");
      setType("warning");
     
    }
    else{
    var requestOptions = {
      method: "POST",
      body: answer,
      redirect: "follow",
    };

    console.log(answer);
    fetch(
      `http://localhost:8082/api/auth/validate-answer/${values.username}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data);
        if (data.statusCode === -1) {
          //wrong username
          setError(1);
          setErrorMessage("User Not Registered!!");
          setType("warning");
        
        } else if (data.statusCode === -2) {
          //wrong password
          setError(1);
          setErrorMessage("Wrong password!!");
          setType("warning");
          
        }else if (data.statusCode === -3) {
          //wrong password
          setError(1);
          setErrorMessage("Wrong Answer!!");
          setType("error");
          
        } else {
          var session = {
            userName: values.username, Id: data.userId, role: data.role, cart: []
          };
          console.log(session);
          ReactSession.set("user", session);
          history.push("/");
          console.log(ReactSession.get("user"));
        }
      })
      .catch((error) => console.log("error", error));
    }
  };

  const handleChangeAnswer =  (event) => {
    setAnswer( event.target.value );
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/featured/?gym,athletics)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                required
                margin="dense"
                fullWidth
                id="outlined-required"
                label="userName"
                name="username"
                autoComplete="username"
                onChange={handleChange1("username")}
              />

              <FormControl
                fullWidth
                variant="outlined"
                label={'margin="dense"'}
                id="margin-dense"
                margin="dense"
              >
                <InputLabel required htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  label={'margin="dense"'}
                  id="margin-dense"
                  margin="dense"
                  name="password"
                  type={values.showPassword ? "password" : "text"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#cc1b85" }}
                onClick={handleForgetPassword}
              >
                Forget Password ?
              </Button>
              {forgetPassword && (
                <InputLabel required htmlFor="outlined-adornment-password">
                  {question}
                </InputLabel>
              )}
              {forgetPassword && (
                <TextField
                  required
                  margin="dense"
                  fullWidth
                  id="outlined-required"
                  label="Answer"
                  name="answer"
                  autoComplete="username"
                  defaultValue={answer}
                  onChange={handleChangeAnswer}
                />
              )}
              {forgetPassword && <Button type="submit" onClick={handleAnswer}>OK</Button>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#cc1b85" }}
              >
                Sign In
              </Button>
              {error === 1 && (
                <Alert severity={type}>warning — {errorMessage}</Alert>
              )}
              <Grid container>
                <Grid item xs></Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
