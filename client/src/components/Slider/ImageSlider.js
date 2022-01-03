import React, { useState } from "react";
import { SliderData } from "./SliderData";
import FaArrowAltCircleLeft from "@mui/icons-material/ArrowCircleLeftRounded";
import FaArrowAltCircleRight from "@mui/icons-material/ArrowCircleRightRounded";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

import { DonutLarge } from "@material-ui/icons";

const ImageSlider = () => {
  const WrapperImages = styled.section`
    // max-width: 70rem;
    // margin: 4rem auto;
    // display: grid;
    // grid-gap: 1em;
    // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    // grid-auto-rows: 300px;
  `;
  const Img = styled.img`
    width: 65%;
    height: 65%;
    object-fit: cover;
  `;
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div
      style={{
        msOverflowX: "scroll",
        msOverflowY: "scroll",
        whiteSpace: "nowrap",
      }}
    >
      <Grid
        xs="auto"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs="auto">
          <FaArrowAltCircleLeft
            className="left-arrow"
            onClick={prevSlide}
            sx={{ fontSize: 40, color: "white" }}
          />
        </Grid>
        <Grid item xs={8.6} style={{ paddingLeft: "59px" }}>
          <WrapperImages>
            {SliderData.map((slide, index) => {
              return (
                <div className={index === current ? "slide active" : "slide"}>
                  {index === current && (
                    // <Img src="https://source.unsplash.com/featured/?gym,athletics" alt="travel image" className="image" />
                    <Img src={slide.src} alt="travel image" className="image" />
                  )}
                </div>
              );
            })}
          </WrapperImages>
        </Grid>
        <Grid item xs="auto">
          <FaArrowAltCircleRight
            className="right-arrow"
            onClick={nextSlide}
            sx={{ fontSize: 40, color: "white" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageSlider;
