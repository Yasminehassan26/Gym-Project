/* eslint-disable import/no-anonymous-default-export */
import { Grid } from "@mui/material";
import { flexbox } from "@mui/system";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import ImageSlider from "../Slider/ImageSlider";
import { SliderData } from "../Slider/SliderData";


export default () => {
 
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
       
     
      <ImageSlider slides={SliderData}  />
  
      <div style={{ width:"100%",backgroundColor:"#cc1b85",marginTop:"35%" }}>
        <p style={{ color: "white" }}>Location : ________</p>
        <p style={{ color: "white" }}>Call us on :_______ </p>
        <p style={{ color: "white" }}>Facebook Page :___________ </p>
        <p style={{ color: "white" }}>Workin from :______ to:_____ </p>
      </div>
     
    </div>
  );
};
