import React, { useState } from "react";
import { SliderData } from "./SliderData";
import FaArrowAltCircleLeft from "@mui/icons-material/ArrowCircleLeftRounded";
import FaArrowAltCircleRight from "@mui/icons-material/ArrowCircleRightRounded";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Box from "@mui/material/Box";

const ImagesSlider = () => {
  const WrapperImages = styled.section`
    // max-width: 70rem;
    // margin: auto;
    // display: grid;
    // grid-gap: 1em;
    // grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    // grid-auto-rows: 300px;
  `;
  const Img = styled.img`
    width: 50%;
    height: 50%;
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FaArrowAltCircleLeft
              className="left-arrow"
              onClick={prevSlide}
              sx={{ fontSize: 40, color: "white" }}
            />
          </Grid>
          <Grid item xs={8}>
            {SliderData.map((slide, index) => {
              return (
                <WrapperImages>
                  {index === current && (
                    <Img src={slide.src} alt="travel image" className="image" />
                  )}
                </WrapperImages>
              );
            })}
          </Grid>
          <Grid item xs={2}>
            <FaArrowAltCircleRight
              className="right-arrow"
              onClick={nextSlide}
              sx={{ fontSize: 40, color: "white" }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ImagesSlider;
