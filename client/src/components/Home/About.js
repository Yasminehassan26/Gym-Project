/* eslint-disable import/no-anonymous-default-export */
import { flexbox } from "@mui/system";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import ImageSlider from "../Slider/ImageSlider";
import { SliderData } from "../Slider/SliderData";


export default () => {
 
  return (
    <div
      style={{
        height: "100%",
        position: "absolute",
        left: 0,
        width: "100%",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <div style={{ marginLeft: "30%" }}>
        <p style={{ color: "white" }}>Location : ________</p>
        <p style={{ color: "white" }}>Call us on :_______ </p>
        <p style={{ color: "white" }}>Facebook Page :___________ </p>
        <p style={{ color: "white" }}>Workin from :______ to:_____ </p>
      </div>
      <ImageSlider slides={SliderData} />
      <h1 style={{ color: "white" }}>No pain NO gain</h1>
    </div>
  );
};
