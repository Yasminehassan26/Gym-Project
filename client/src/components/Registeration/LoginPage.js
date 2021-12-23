import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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

const theme = createTheme();

export default function SignInSide({colorPallet}) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const[forgetPassword,setForgetPassword] = useState(false);
  const[question,setQuestion] = useState("");
  const[answer, setAnswer] = useState("");

  const handleChange = (prop) => (event) => {
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
 const handleForgetPassword =()=>{
  setForgetPassword(true);
  //call to the back end to get the question  and set them
  setQuestion("What is your favourite pet");
  
 }
 const handleAnswer= (event)=>{
   //send the answer to the back end and show the result
   
   setAnswer(event.target.value)
   console.log(answer);
 }

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
            backgroundImage: "url(https://source.unsplash.com/featured/?gym,athletics)",
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
            <Avatar sx={{ m: 1, bgcolor: colorPallet[0] }}>
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
                label="Email"
                name="email"
                autoComplete="email"
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
                  name = "password"
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
                sx={{ mt: 3, mb: 2 , backgroundColor : colorPallet[0] }}
               onClick={handleForgetPassword}
              >Forget Password ?</Button>
              {forgetPassword &&  <InputLabel required htmlFor="outlined-adornment-password">
                  {question}
                </InputLabel>  }
                {forgetPassword && <TextField
                required
                margin="dense"
                fullWidth
                id="outlined-required"
                label="Answer"
                name="answer"
                autoComplete="email"
                onChange={handleAnswer}
              />
}
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,backgroundColor: "#cc1b85"}}
                
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
         
              
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
