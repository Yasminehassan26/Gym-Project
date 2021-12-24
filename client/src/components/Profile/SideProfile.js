import * as React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
const Input = styled("input")({
  display: "none",
});
export default function SideProfile() {
  const [name, setName] = useState("dida");
  const [mobilePhone, setMobilePhone] = useState("2685245624862");
  const [schedual, setSchedual] = useState(false);

  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, isError] = useState("");

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
  // data ,isPending ,isError = useFetch()
  const handleSchedual = () => {
    setSchedual(!schedual);
  };
  useEffect(() => {
    //fetch the data to show userName and phone number
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      margin={5}
      spacing={3}
    >
      {isPending && (
        <Box sx={{ display: "flex" }}>
          {" "}
          <CircularProgress style={{ color: "#cc1b85" }} />{" "}
        </Box>
      )}
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
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
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100, color: "#cc1b85" }}
        />{" "}
      </Badge>
      <Grid direction="row" container spacing={1}>
        <Grid>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
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
                <h4>password</h4>
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
                <h4>Mobile number</h4>
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
                <h4>answer</h4>
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
          </Box>
        </Grid>
        <Grid direction="column" style={{ marginLeft: "30%" }}>
          <Button
            variant="contained"
            style={{
              mt: 3,
              mb: 2,
              backgroundColor: "#cc1b85",
              border: "solid",
            }}
            onClick={handleSchedual}
          >
            {" "}
            Show Schedual
          </Button>
          {schedual && (
            <div style={{ marginTop: "10%" }}>
              The Schedual is empty right now{" "}
            </div>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
}
