import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { getNewsAction } from "../../../store/action/news.action";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "./news.css";

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


import latMat from "./dien-anh-24h/img/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png";
import bocTem from "./dien-anh-24h/img/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png";
import woman from "./dien-anh-24h/img/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png";
import khaiTruong from "./dien-anh-24h/img/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg";
import mortal from "./dien-anh-24h/img/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png";
import ngoThanhVan from "./dien-anh-24h/img/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg";
import tiecTrangMau from "./dien-anh-24h/img/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png";
import parkSeoJoon from "./dien-anh-24h/img/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png";

import american from "./review/img/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png";
import black from "./review/img/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png";
import covid from "./review/img/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg";
import blood from "./review/img/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg";
import dinhThu from "./review/img/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png";
import veSi from "./review/img/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg";
import spiderman from "./review/img/review-spider-man-into-the-spider-vesre-15886520889426.png";
import tanTich from "./review/img/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png";

import psm30k from "./khuyen-mai/img/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg";
import thu6 from "./khuyen-mai/img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg";
import beta from "./khuyen-mai/img/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png";
import trangTi from "./khuyen-mai/img/bhd-59k-ve-ca-tuan-16190002421777.jpg";
import bhd59k from "./khuyen-mai/img/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg";
import dongGia from "./khuyen-mai/img/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png";
import mega from "./khuyen-mai/img/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg";
import tix1k from "./khuyen-mai/img/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
    textDecoration : "none",
  },
}));

 

function News() {
  const classes = useStyles();
  const [render, setRender] = useState(1, 2, 3);
  let [like1, setLike1] = useState(0);
  let [like2, setLike2] = useState(0);
  let [like3, setLike3] = useState(0);
  let [like4, setLike4] = useState(0);

  let [like5, setLike5] = useState(0);
  let [like6, setLike6] = useState(0);
  let [like7, setLike7] = useState(0);
  let [like8, setLike8] = useState(0);

  let [like9, setLike9] = useState(0);
  let [like10, setLike10] = useState(0);
  let [like11, setLike11] = useState(0);
  let [like12, setLike12] = useState(0);

  const [visible, setVisible] = useState(1);

  const auth = useSelector((state) => {
    return state.auth.userLogin;
  });


  // valid user-------------------
  let showHoTen = "";
  let valid = false;

  if (auth === null) {
    showHoTen = "";
  } else {
    showHoTen = auth.hoTen;
  }

  if (showHoTen == null || showHoTen == "") {
    valid = false;
  } else {
    valid = true;
  }

  // Modal-------------------------------------------------------
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };






  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];


  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 1);
  };

  const renderDienAnh = () => {
    return data.slice(0, visible).map((item, index) => {
      return (
        <div className="news-dien-anh" key={index}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={latMat} alt="" />
                </a>
                <a href="">
                  <p>
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </p>
                </a>
                <p>
                  Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt
                  đuổi gay cấn thót tim fans hâm mộ
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like1 + 1;
                  setLike1(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like1}
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={mortal} alt="" />
                </a>
                <a href="">
                  <p>
                    [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM
                    ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM
                  </p>
                </a>
                <p>
                  Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood
                  cũng không thiếu những tác phẩm đình đám được chuyển thể từ
                  tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện
                  tử.
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like2 + 1;
                  setLike2(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like2}
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={woman} alt="" />
                </a>
                <a href="">
                  <p>
                    PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                    màn trả thù đàn ông để đời
                  </p>
                </a>
                <p>
                  Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                  mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                  nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô
                  Gái Trẻ Hứa Hẹn).{" "}
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like3 + 1;
                  setLike3(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like3}
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={parkSeoJoon} alt="" />
                </a>
                <a href="">
                  <p>
                    VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                    QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM
                  </p>
                </a>
                <p>
                  Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                  năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                  Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn
                  sẽ làm cho hội chị em phải mê mẩn vào tháng tới.
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like4 + 1;
                  setLike4(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like4}
              </div>
            </Grid>
            <Grid item md={4}>
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={khaiTruong} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={bocTem} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={tiecTrangMau} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                        công chiếu
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={ngoThanhVan} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ
                        TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM –
                        VINAMAN
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    });
  };

  const renderKhuyenMai = () => {
    return data.slice(0, visible).map((item, index) => {
      return (
        <div className="news-dien-anh" key={index}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={trangTi} alt="" />
                </a>
                <a href="">
                  <p>BHD 59K/VÉ CẢ TUẦN !!!</p>
                </a>
                <p>
                  Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                  59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like5 + 1;
                  setLike5(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like5}
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={tix1k} alt="" />
                </a>
                <a href="">
                  <p>TIX 1K/VÉ NGẠI CHI GIÁ VÉ</p>
                </a>
                <p>
                  Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
                  voucher thanh toán ZaloPay thả ga
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like6 + 1;
                  setLike6(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like6}
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={dongGia} alt="" />
                </a>
                <a href="">
                  <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX </p>
                </a>
                <p>
                  ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc
                  chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like7 + 1;
                  setLike7(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like7}
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={bhd59k} alt="" />
                </a>
                <a href="">
                  <p>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</p>
                </a>
                <p>
                  Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                  59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục
                  Vé Phim trên ZaloPay.
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like8 + 1;
                  setLike8(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like8}
              </div>
            </Grid>
            <Grid item md={4}>
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={beta} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        Beta Cineplex trở lại với hàng loạt ưu đãi lớn
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={thu6} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé
                        Anh Trai Yêu Quái
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={psm30k} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé
                        Pháp Sư Mù: Ai Chết Giơ Tay
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={mega} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        [Mega GS] Một đoá hoa thay ngàn lời yêu
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    });
  };
  const renderReview = () => {
    return data.slice(0, visible).map((item, index) => {
      return (
        <div className="news-dien-anh" key={index}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={tanTich} alt="" />
                </a>
                <a href="">
                  <p>
                    Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết
                  </p>
                </a>
                <p>
                  Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like9 + 1;
                  setLike9(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like9}
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={dinhThu} alt="" />
                </a>
                <a href="">
                  <p>Review: Dinh Thự Oan Khuất (Ghost Of War)</p>
                </a>
                <p>
                  Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan
                  Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like10 + 1;
                  setLike10(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like10}
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={black} alt="" />
                </a>
                <a href="">
                  <p>‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh</p>
                </a>
                <p>
                  Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của
                  đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng
                  tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like11 + 1;
                  setLike11(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like11}
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="newsItem">
                <a href="">
                  <img className="newsImg" src={american} alt="" />
                </a>
                <a href="">
                  <p>American Sniper - Chính nghĩa hay phi nghĩa?</p>
                </a>
                <p>
                  American Sniper khắc họa một tay súng bắn tỉa “huyền thoại”
                  của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện
                  phim chậm rãi đưa người xem qua từng thời khắc khác nhau của
                  Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham
                  chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...
                </p>
              </div>
              <div className="like">
                <i onClick={valid ? () => {
                  let newlike = like12 + 1;
                  setLike12(newlike);
                } : handleOpen} class="far fa-thumbs-up"></i>
                {like12}
              </div>
            </Grid>
            <Grid item md={4}>
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={spiderman} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        Review: Spider-Man: Into The Spider-Vesre
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={covid} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        COVID-19 là bản chính thức của MEV-1 phim contagion
                        (2011)
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={veSi} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao
                        giờ lầy lội và hài hước đến thế
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Grid item md={12}>
                <Grid container>
                  <Grid className="md2" item md={2}>
                    <a href="">
                      <img className="newsImgSmall" src={blood} alt="" />
                    </a>
                  </Grid>
                  <Grid item md={10}>
                    <a href="">
                      <p className="p-md10">
                        [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                        hùng Valiant
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    });
  };

  return (
    <div className="news1">
      <div className="news-button">
        <button className="btn"
          onClick={() => {
            setRender(1);
          }}
          className="button"
        >
          Điện Ảnh 24h
        </button>
        <button className="btn"
          onClick={() => {
            setRender(2);
          }}
          className="button"
        >
          Review
        </button>
        <button className="btn"
          onClick={() => {
            setRender(3);
          }}
          className="button"
        >
          Khuyến Mãi
        </button>
      </div>
      {render === 1 ? renderDienAnh() : ""}
      {render === 2 ? renderReview() : ""}
      {render === 3 ? renderKhuyenMai() : ""}
      <div className="btnShowMore">
        <button onClick={showMoreItems}>XEM THÊM</button>
      </div>


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Bạn cần phải đăng nhập.</h2>
            <NavLink
                  activeClassName={classes.navActive}
                  to="/sign-in"
                  className={classes.flex}
                >
                  <Typography
                    variant="h6"
                    className={classes.title}
                    style={!valid ? { display: "block" } : { display: "none" }}
                  >
                    Đăng Nhập
                  </Typography>
                </NavLink>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default News;
