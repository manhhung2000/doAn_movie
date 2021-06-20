import React, { useState, useEffect } from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import {
  getUserAction,
  updateUserAction,
} from "../../store/action/user.action";
import format from "date-format";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, NavLink } from "react-router-dom";
import { Link } from "@material-ui/icons";

function User() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const taiKhoan = JSON.parse(localStorage.getItem("taiKhoan"));
  const dispatch = useDispatch();
  const history = useHistory();
  const userDetail = useSelector((state) => {
    return state.user.userDetail;
  });
  const [choice, setChoice] = useState(1);

  // console.log("userDetail", userDetail);

  useEffect(() => {
    dispatch(getUserAction(taiKhoan));
  }, [dispatch]);

  //   ------------------------------
  const handleChoice1 = () => {
    setChoice(1);
  };
  const renderThongTinCaNhan = () => {
    return (
      <div>
        <p>Họ tên: {userDetail?.hoTen}</p>
        <p>Email: {userDetail.email}</p>
        <p>Số điện thoại: {userDetail.soDT}</p>
        <p>Mật Khẩu: {userDetail.matKhau}</p>
      </div>
    );
  };

  // -----------------------------
  const handleChoice2 = () => {
    setChoice(2);
  };
  const renderLichSuDatVe = () => {
    return userDetail?.thongTinDatVe.map((ve, index) => {
      return ve.danhSachGhe.map((ghe, index) => {
        return (
          <div key={index}>
            <hr />
            <p>Tên phim: {ve.tenPhim}</p>
            <p>Giá vé: {ve.giaVe}</p>
            <p>Thời lượng: {ve.thoiLuongPhim}</p>
            <p>Ngày đặt: {format("MM/dd/yy - hh:mm", new Date(ve.ngayDat))}</p>
            <p>{ghe.tenHeThongRap}</p>
            <p>{ghe.tenCumRap}</p>
            <p>{ghe.tenGhe}</p>
          </div>
        );
      });
    });
  };

  return (
    <div className="user">
      <Button onClick={handleChoice1}>Thông tin cá nhân</Button>
      <Button onClick={handleChoice2}>Lịch sử đặt vé</Button>
      <Button>
        <NavLink
          to="/user-update"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <Typography>Cập nhật tài khoản</Typography>
        </NavLink>
      </Button>
      <div className="user-detail">
        {choice === 1 ? renderThongTinCaNhan() : ""}
        {choice === 2 ? renderLichSuDatVe() : ""}
      </div>
    </div>
  );
}

export default User;
