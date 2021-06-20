import { Button, Container, Grid } from "@material-ui/core";
import Slider from "react-slick";
import React from "react";
import "./block-app.css";
import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpg";
import slide4 from "./img/slide4.jpg";
import slide5 from "./img/slide5.jpg";
import slide6 from "./img/slide6.jpg";
import slide7 from "./img/slide7.jpg";
import slide8 from "./img/slide8.jpg";
import slide9 from "./img/slide9.jpg";
import slide10 from "./img/slide10.jpg";
import slide11 from "./img/slide11.jpg";
import slide12 from "./img/slide12.jpg";
import slide13 from "./img/slide13.jpg";
import slide14 from "./img/slide14.jpg";
import slide15 from "./img/slide15.jpg";
import slide16 from "./img/slide16.jpg";

function BlockApp() {
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
    <div className="blockApp" style={{ marginTop: "100px" }}>
      <Container maxWidth="lg">
        <Grid className="blockAppGrid" container>
          <Grid item md={8} xs={12}>
            <div className="text">
              <p>Ứng dụng tiện lợi dành cho người yêu điện ảnh</p>
              <p style={{fontSize: "medium"}}>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <Button className="blockAppBtn">App miễn phí - Tải về ngay!</Button>
              <p>TIX có hai phiên bản iOS & Android</p>
            </div>
          </Grid>
          <Grid item md={2} xs={4} className="blockAppGridImg">
            <Slider {...settings}>
              <img className="blockAppImg" src={slide1} alt="" />
              <img className="blockAppImg" src={slide2} alt="" />
              <img className="blockAppImg" src={slide3} alt="" />
              <img className="blockAppImg" src={slide4} alt="" />
              <img className="blockAppImg" src={slide5} alt="" />
              <img className="blockAppImg" src={slide6} alt="" />
              <img className="blockAppImg" src={slide7} alt="" />
              <img className="blockAppImg" src={slide8} alt="" />
              <img className="blockAppImg" src={slide9} alt="" />
              <img className="blockAppImg" src={slide10} alt="" />
              <img className="blockAppImg" src={slide11} alt="" />
              <img className="blockAppImg" src={slide12} alt="" />
              <img className="blockAppImg" src={slide13} alt="" />
              <img className="blockAppImg" src={slide14} alt="" />
              <img className="blockAppImg" src={slide15} alt="" />
              <img className="blockAppImg" src={slide16} alt="" />
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default BlockApp;
