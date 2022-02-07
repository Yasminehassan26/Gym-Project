import ShopCard from "./ShopCard"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";

const Cards = ({Elements}) => {
    const [elements, setElements] = React.useState(Elements);
// load the list
  return (


    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: {
          flex: 1,
          resizeMode: "cover", // or 'stretch'
        },
         backgroundImage: `url(${"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=1200"}`,
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        // sx={{ backgroundImage: `url(${Image})` }}
      >
        {elements.map((element) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              {console.log(element.name)}
              <ShopCard Element={element} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  

  );
};

export default Cards;
