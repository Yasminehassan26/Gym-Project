import HomeBar from "./HomeBar";
import About from "./About";
import Grid from "@mui/material/Grid";

const HomePage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {/* <HomeBar /> */}

      <About />
    </Grid>
  );
};

export default HomePage;
