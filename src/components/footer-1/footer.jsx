import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./footer.css";
import go from "./img/123go.png";
import agribank from "./img/AGRIBANK.png";
import bhd from "./img/bhd.png";
import beta from "./img/bt.jpg";
import cgv from "./img/cgv.png";
import cinestar from "./img/cinestar.png";
import cnx from "./img/cnx.jpg";
import dcine from "./img/dcine.png";
import ddc from "./img/dongdacinema.png";
import galaxy from "./img/galaxycine.png";
import ivb from "./img/IVB.png";
import laban from "./img/laban.png";
import lotte from "./img/lotte.png";
import mega from "./img/megags.png";
import payoo from "./img/payoo.jpg";
import starLight from "./img/STARLIGHT.png";
import touch from "./img/TOUCH.png";
import vcb from "./img/VCB.png";
import viettin from "./img/VIETTINBANK.png";
import zalo from "./img/zalopay_icon.png";
import android from "./img/android-logo.png";
import apple from "./img/apple-logo.png";
import zaloLogo from "./img/zalo-logo.png";
import fbLogo from "./img/facebook-logo.png";
import bct from "./img/bctpng.png";
import zion from "./img/zion-logo.jpg";

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="lg">
        <Grid container className="footerP">
          <Grid item md={4}>
            <p>TIX</p>
            <Grid container>
              <Grid item md={6}>
                <a href="">FAQ</a>
                <br />
                <a href="">Brand Guidelines</a>
              </Grid>
              <Grid item md={6}>
                <a href="">Thỏa thuận sử dụng</a>
                <br />
                <a href="">Chính sách bảo mật</a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <p>ĐỐI TÁC</p>
            <Grid container className="footerA">
              <a href="">
                <img className="footerImg" src={cgv} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={bhd} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={galaxy} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={cinestar} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={lotte} alt="" />
              </a>
            </Grid>
            <Grid container className="footerA">
              <a href="">
                <img className="footerImg" src={mega} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={beta} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={ddc} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={touch} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={cnx} alt="" />
              </a>
            </Grid>
            <Grid container className="footerA">
              <a href="">
                <img className="footerImg" src={starLight} alt="" />
              </a>

              <a href="">
                <img className="footerImg" src={dcine} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={zalo} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={payoo} alt="" />
              </a>
              <a href="">
                {" "}
                <img className="footerImg" src={vcb} alt="" />
              </a>
            </Grid>
            <Grid container className="footerA">
              <a href="">
                <img className="footerImg" src={agribank} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={viettin} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={ivb} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={go} alt="" />
              </a>
              <a href="">
                <img className="footerImg" src={laban} alt="" />
              </a>
            </Grid>
          </Grid>
          <Grid item md={2}>
            <p>MOBILE APP</p>
            <Grid container>
              <a href="">
                <img className="footerApp" src={apple} alt="" />
              </a>
              <a href="">
                <img className="footerApp" src={android} alt="" />
              </a>
            </Grid>
          </Grid>
          <Grid item md={2}>
            <p>SOCIAL</p>
            <Grid container>
              <a href="">
                <img className="footerApp" src={fbLogo} alt="" />
              </a>
              <a href="">
                <img className="footerApp" src={zaloLogo} alt="" />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <Grid container style={{marginTop: "30px"}}>
          <Grid item md={2} sm={1}>
            <img className="zion" src={zion} alt="" />
          </Grid>
          <Grid item md={8} sm={9}>
            <div className="footerText">
              <span style={{color: "#fff"}}>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span> <br />
              <span>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </span> <br />
              <span>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br /> đăng ký thay
                đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu
                tư Thành phố Hồ Chí Minh cấp.
              </span>
              <br />
              <span>
                Số Điện Thoại (Hotline): 1900 545 436 <br />
                Email: <a style={{color: "#FB4226", textDecoration: "none"}} href="">support@tix.vn</a>
              </span>
            </div>
          </Grid>
          <Grid item md={2} sm={2}>
              <img className="bct" src={bct} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
