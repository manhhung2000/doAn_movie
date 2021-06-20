import { Button, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonSlick } from "./carousel.css";
import trangTi from "./img/trang-ti.jpg";
import latMat from "./img/lat-mat-48h.png";
import banTayDietQuy from "./img/ban-tay-diet-quy.png";
function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <ButtonSlick container>
        <Grid item lg={12} md={6} xs={12}>
          <div>
            <Slider {...settings}>
              <div>
                <img style={{ width: "100%" }} src={trangTi} alt="" />
              </div>
              <div>
                <img style={{ width: "100%" }} src={latMat} alt="" />
              </div>
              <div>
                <img style={{ width: "100%" }} src={banTayDietQuy} alt="" />
              </div>
            </Slider>
          </div>
        </Grid>
      </ButtonSlick>
    </div>
  );
}

export default Carousel;
