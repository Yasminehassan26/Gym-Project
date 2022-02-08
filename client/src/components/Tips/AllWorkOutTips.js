import TipCard from "./TipCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState,useEffect } from "react";
import Navbar from "../Navbar";

const AllWorkOutTips = ({history}) => {
  //on opening the page this data should be fetched from the backend
  const [workOutTips, setWorkOutTips] = useState([]);
  const workOutTips1 = [
    {
      id: 12,
      title: "Trademill",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 12,
      title: "Fittness",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 12,
      title: "Kardeo",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 12,
      title: "Airobics",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 12,
      title: "10*20",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",
      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
    {
      id: 12,
      title: "Jump",
      description:
        "To lose weight, most people need to reduce the number of calories they get from food and beverages (energy IN) and increase their physical activity (energy OUT)",

      details:
        "Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products Includes lean meats, poultry, fish, beans, eggs, and nuts Limits saturated and trans fats, sodium, and added sugars Controls portion sizes",
    },
  ];
  useEffect(() => {
    //  setTrainers(data);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      fetch("http://localhost:8082/api/static/tips/work-out", requestOptions)
        .then((response) => response.json())
        .then((data)=>{
          for(var i = 0; i < data.length; i++){
              data[i].id = i + 1;
          }
          setWorkOutTips(data);
        })
        .catch((error) => console.log("error", error));
     },[]);
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
        sx={{ backgroundImage: `url(${Image})` }}
      >
        {workOutTips.map((tip) => {
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

export default AllWorkOutTips;
