import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
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
import { useHistory } from "react-router-dom";



function UserUpdatePage() {
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
  const taiKhoanold = JSON.parse(localStorage.getItem("taiKhoan"));
  const [user, setUser] = useState({
    taiKhoan: taiKhoanold,
    matKhau: "",
    email: "",
    soDT: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  const [error, setError] = useState({
    errors: {
      //   taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    valid: true,
  });

  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newError = { ...error.errors };
    let newValid = true;
    // console.log(newError);

    if (value.trim() === "") {
      newError[name] = name + " is requỉed !";
      newValid = true;
    } else {
      newError[name] = "";
      newValid = false;
    }
    setUser({
      ...user,
      [name]: value,
    });
    setError({
      errors: newError,
      valid: newValid,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction(user, history));
  };

  const taiKhoan = JSON.parse(localStorage.getItem("taiKhoan"));
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="matKhau"
              label="Mật Khẩu"
              type="password"
              id="matKhau"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{error.errors.matKhau}</span>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{error.errors.email}</span>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="soDT"
              label="Số Điện Thoại"
              name="soDT"
              autoComplete="soDT"
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{error.errors.soDT}</span>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="hoTen"
              label="Họ Tên"
              name="hoTen"
              autoComplete="hoTen"
              onChange={handleChange}
            />
            <span style={{ color: "red" }}>{error.errors.hoTen}</span>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={error.valid}
        >
          Cập nhật
        </Button>
      </form>
    </div>
  );
}

export default UserUpdatePage;
