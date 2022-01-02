import HomeBar from "./HomeBar";
import About from "./About";
import Grid from "@mui/material/Grid";

const HomePage = ({history}) => {
  return (
    
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor = "black"
    >
      <Grid>
      <HomeBar history={history} />
      </Grid>
      <Grid>
      <About />
      </Grid>
    </Grid>
   
  );
};

export default HomePage;