import HomeBar from "./HomeBar";
import About from "./About";
import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";

const HomePage = ({ history }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor="black"
    >
      <Grid>
      <Navbar history={history} />
        <HomeBar history={history} />
      </Grid>
      <Grid>
        <About />
      </Grid>
    </Grid>
  );
};

export default HomePage;
