import React, { useState } from "react";
import { SliderData } from "./SliderData";
import FaArrowAltCircleLeft from "@mui/icons-material/ArrowCircleLeftRounded";
import FaArrowAltCircleRight from "@mui/icons-material/ArrowCircleRightRounded";
import Grid from "@mui/material/Grid";
import { DonutLarge } from "@material-ui/icons";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div 
    style= {{msOverflowY :"scroll" , whiteSpace: "nowrap"}}
   >
    <Grid
      xs="auto"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      {/* <G
      rid item xs="auto">
      <p style={{color:"white",fontSize:"280%",fontStyle:"bolder",fontFammily:"cursive"}}>NO</p>
      <p style={{color:"white"}}>PAIN</p>
      <p style={{color:"white"}}>NO</p>
      <p style={{color:"white"}}>GAIN</p>
      </Grid> */}
      <Grid item xs="auto"  >
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}  sx={{ fontSize: 40  ,color: "white" }}  />
      </Grid>
      <Grid item xs={6.5} style={{paddingLeft: "59px" }}>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                  src={slide.src}
                  alt="travel image"
                  className="image"
                  sx={{ height: 10 }}
                />
              )}
            </div>
          );
        })}
      </Grid>
      <Grid item xs="auto">
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}   sx={{ fontSize: 40 ,color: "white" }} />
      </Grid>
    </Grid>
  </div>
  );
};

export default ImageSlider;
