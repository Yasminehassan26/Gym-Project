import TrainerCard from "./TrainerCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {ReactSession} from 'react-client-session';
import { useState,useEffect } from "react";
import Navbar from "../Navbar";

const AllTrainers = ({history}) => {
  //on opening the page this data should be fetched from the backend
  const [trainers, setTrainers] = useState([]);
  const data = [{id:1 , name:"Mohamed Yasser" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:2 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:3 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:4 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:5 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:6 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:7 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:8 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:9 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] },
{id:10 , name:"Tarek Ashor" , bio:"hey I am captain tarek and it will be great to see you soon " , phoneNumber:"01201687799",
sports:[{sport:"kick boxing"},{sport:"fittness"},{sport:"yoga"}], achievements:[{achievement:"Africa championship" , date:"30/12/2021"},{achievement:"Egypt championship" , date:"12/1/2020"}] }]
 
 useEffect(() => {
   setTrainers(data);
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };
  //   fetch("http://localhost:8082/api/booking/programs", requestOptions)
  //     .then((response) => response.json())
  //     .then((data)=>{
  //       setPrograms(data);
  //     })
  //     .catch((error) => console.log("error", error));
   },[]);

  return (
    <div>
    <Navbar history={history} />
    <Box
      sx={{
        height: "100%",
        width: "100%",
        backgroundImage: {
          flex: 1,
          resizeMode: "cover", // or 'stretch'
        },
        backgroundImage: `url(${"https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=800"}`,
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ backgroundImage: `url(${Image})` }}
      >
        {trainers.map((trainer) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <TrainerCard trainer={trainer} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
    </div>
  );
};

export default AllTrainers;
