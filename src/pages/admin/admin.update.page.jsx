import React, { useEffect, useState, } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUpAction } from "../../store/action/auth.action";
import { updateAdminPageAction } from "../../store/action/admin.action";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
function AdminUpdatePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [valid, setValid] = useState(true);
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDT: "",
    maNhom: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  });

  const [error, setError] = useState({
    errors: {
      taiKhoan: "",
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
    dispatch(updateAdminPageAction(user, history));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cập nhật
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="taiKhoan"
                variant="outlined"
                required
                fullWidth
                id="taiKhoan"
                label="Tài Khoản"
                autoFocus
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>{error.errors.taiKhoan}</span>
            </Grid>
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
                id="maNhom"
                label="Mã Nhóm"
                name="maNhom"
                autoComplete="maNhom"
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>{error.errors.maNhom}</span>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="maLoaiNguoiDung"
                label="Mã Loại Người Dùng"
                name="maLoaiNguoiDung"
                autoComplete="maLoaiNguoiDung"
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>
                {error.errors.maLoaiNguoiDung}
              </span>
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default AdminUpdatePage;
