import HomeBar from "./HomeBar";
import About from "./About";
import Grid from "@mui/material/Grid";

const HomePage = ({colorPallet}) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor = "black"
    >
      <Grid>
      <HomeBar colorPallet = {colorPallet} />
      </Grid>
      <Grid>
      <About colorPallet = {colorPallet} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
