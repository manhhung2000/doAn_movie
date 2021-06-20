import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, NavLink } from "react-router-dom";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutAction } from "../../store/action/auth.action";
import { useSelector } from "react-redux";
import logo from "./header-img/web-logo.png";
import "./Navbar.css";
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  marginNav: {
    margin: "0px 10px",
  },
  navActive: {
    backgroundColor: "#ccc",
  },
  formControl: {
    minWidth: 100,
  },
}));

export default function Header() {
  const [click, setClick] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => {
    return state.auth.userLogin;
  });
  // console.log("auth ", auth);

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
  // console.log("showHoTen ", showHoTen);
  // console.log("valid", valid);
  const signOut = () => {
    dispatch(signOutAction(history));
  };

  const handleClick = () => {
    setClick(!click);
  };


  return (
    <div className="header-bg" className={classes.root} style={{width: "100%", zIndex: "1"}}>
      <div>
        <AppBar position="static">
          <Toolbar
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavLink
              activeClassName={classes.navActive}
              exact
              to="/"
              className={classes.marginNav}
            >
              <Typography variant="h6" className={classes.title}>
                <img
                  style={{
                    width: "50px",
                    display: "flex",
                    alignItems: "center",
                    background: "white"
                  }}
                  src={logo}
                  alt="logo"
                ></img>
              </Typography>
            </NavLink>

            <div style={{ display: "flex" }} className={click ? "nav-menu active" : "nav-menu"}>
              <NavLink
                activeClassName={classes.navActive}
                to="/movie-detail"
                className={classes.marginNav}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <Typography variant="h6" className={classes.title}>
                  Lịch Chiếu
                </Typography>
              </NavLink>
              <NavLink
                activeClassName={classes.navActive}
                to="/movie-detail"
                className={classes.marginNav}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <Typography variant="h6" className={classes.title}>
                  Cụm rạp
                </Typography>
              </NavLink>
              <NavLink
                activeClassName={classes.navActive}
                to="/movie-detail"
                className={classes.marginNav}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <Typography variant="h6" className={classes.title}>
                  Tin Tức
                </Typography>
              </NavLink>
              <NavLink
                activeClassName={classes.navActive}
                to="/movie-detail"
                className={classes.marginNav}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <Typography variant="h6" className={classes.title}>
                  Ứng dụng
                </Typography>
              </NavLink>
            </div>

            <div
              style={{
                display: "flex !important",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className={click ? "nav-menu news" : "nav-menu"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                    alt=""
                    src=""
                    style={!valid ? {} : { display: "none" }}
                    className={classes.small}
                  >
                  </Avatar>
                <NavLink
                  activeClassName={classes.navActive}
                  to="/sign-in"
                  className={classes.marginNav}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <Typography
                    variant="h6"
                    className={classes.title}
                    style={!valid ? { display: "block" } : { display: "none" }}
                  >
                    Đăng Nhập
                  </Typography>
                </NavLink>
                <NavLink
                  activeClassName={classes.navActive}
                  to="/sign-up"
                  className={classes.marginNav}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <Typography
                    variant="h6"
                    className={classes.title}
                    style={!valid ? { display: "block" } : { display: "none" }}
                  >
                    Đăng ký
                  </Typography>
                </NavLink>
              </div>

              <div
              className={click ? "nav-menu account" : "nav-menu"} 
                style={ !valid ? {display: "none"} :{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <NavLink
                  activeClassName={classes.navActive}
                  to="/"
                  className={classes.marginNav}
                >
                  <Typography
                    variant="h6"
                    className={classes.title}
                    style={valid ? { display: "block" } : { display: "none" }}
                    onClick={signOut}
                  >
                    Đăng xuất
                  </Typography>
                </NavLink>
                <Avatar
                  alt=""
                  src=""
                  style={valid ? {} : { display: "none" }}
                  className={classes.small}
                ></Avatar>
                <h3>{showHoTen}</h3>
                {/* <FormControl className={classes.formControl}>
                  <InputLabel>1</InputLabel>
                  <Select>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl> */}
              </div>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
