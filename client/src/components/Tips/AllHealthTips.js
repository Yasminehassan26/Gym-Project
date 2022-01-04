import TipCard from "./TipCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const AllHealthTips = () => {
  //on opening the page this data should be fetched from the backend
  const healthTips = [
    {
      id: 12,
      title: "The 30 Calories diet",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 12,
      title: "The 30 Calories diet",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 12,
      title: "The 30 Calories diet",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 12,
      title: "The 30 Calories diet",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 12,
      title: "The 30 Calories diet",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 12,
      title: "The 30 Calories diet",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
  ];
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: {
          flex: 1,
          resizeMode: "cover", // or 'stretch'
        },
        backgroundImage: `url(${"https://images.unsplash.com/photo-1533383915223-f99474794bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=500"}`,
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ backgroundImage: `url(${Image})` }}
      >
        {healthTips.map((tip) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <TipCard tip={tip} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AllHealthTips;
