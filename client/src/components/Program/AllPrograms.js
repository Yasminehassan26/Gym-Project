import ProgramCard from "./ProgramCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




const AllPrograms = () => {
  //on opening the page this data should be fetched from the backend
  const programs = [{
    id: 12,
    name: "selver",
    Duration: "1 Month",
    price: 1000,
    Description:
      "This is a monthly program that consists of multiple sport types",
  },{
  id: 12,
  name: "selver",
  Duration: "1 Month",
  price: 1000,
  Description:
    "This is a monthly program that consists of multiple sport types",
},
{
  id: 12,
  name: "selver",
  Duration: "1 Month",
  price: 1000,
  Description:
    "This is a monthly program that consists of multiple sport types",
},
{
  id: 12,
  name: "selver",
  Duration: "1 Month",
  price: 1000,
  Description:
    "This is a monthly program that consists of multiple sport types",
},
{
  id: 12,
  name: "selver",
  Duration: "1 Month",
  price: 1000,
  Description:
    "This is a monthly program that consists of multiple sport types",
},
{
  id: 12,
  name: "selver",
  Duration: "1 Month",
  price: 1000,
  Description:
    "This is a monthly program that consists of multiple sport types",
},
];
  return (
   
    <Box sx={{ width: '100%',backgroundImage:
       `url(${"https://images.unsplash.com/photo-1561729955-89357c733059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=800"}` }}> 
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{backgroundImage: `url(${Image})`}}>
    {programs.map((program) => {
      return (
        <Grid item xs={2} sm={4} md={4} >
           <ProgramCard program={program}/>
        </Grid>
      );
    })}
    </Grid>
  </Box>
      
  
  );
  

};

export default AllPrograms;
