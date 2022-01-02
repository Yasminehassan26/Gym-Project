
import "react-animated-slider/build/horizontal.css";
import ImageSlider from "../Slider/ImageSlider";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: " #FFFFFF",
  height: 60,
  lineHeight: "60px",
  backgroundColor: "#A10A7E",
}));
export default function About() {
 

  return (
    <div
    container
    direction="column"
    justifyContent="space-evenly"
    alignItems="center"
      style={{
        height: "100%",
        position: "absolute",
        left: 0,
        width: "100%",
        overflow: "hidden",
        backgroundColor: "black",
        
      
      }}
    >
       
     
      <ImageSlider />
  
      <div style={{ width:"100%",backgroundColor:"#cc1b85",marginTop:"35%" }}>
        <p style={{ color: "white" }}>Location : ____</p>
        <p style={{ color: "white" }}>Call us on :___ </p>
        <p style={{ color: "white" }}>Facebook Page :_____ </p>
        <p style={{ color: "white" }}>Workin from :__ to:___ </p>
      </div>
     
    </div>
  );
};