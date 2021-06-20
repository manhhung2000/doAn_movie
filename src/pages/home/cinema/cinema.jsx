import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  getCinemaClusterAction,
  getCinemaMovieAction,
  getMovieAction,
} from "../../../store/action/cinema.action";
import { Rowing } from "@material-ui/icons";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  navActive: {
    backgroundColor: "#a31231",
  },
  fixoverflow: {
    overflow: "auto",
    height: "60vh",
  }
});

export default function Cinema(props) {
  const { cinemaList } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const cinemaCluster = useSelector((state) => {
    return state.cinema.cinemaCluster;
  });

  const cinemaMovie = useSelector((state) => {
    return state.cinema.movie;
  });
  console.log("cinemaMovie", cinemaMovie);

  // -----------------------------------------------------------
  const handleChoiceCinema = (cinema) => {
    dispatch(getCinemaClusterAction(cinema));
    dispatch(getCinemaMovieAction(cinema));
  };

  const renderCol1 = () => {
    return cinemaList.map((cinema, index) => {
      return (
        <TableRow key={index}>
          <TableCell>
            <Button onClick={() => handleChoiceCinema(cinema.maHeThongRap)} activeClassName={classes.navActive}>
              <img width="50px" src={cinema.logo} alt="" />
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };

  // -----------------------------------------

  const handleChoiceMovie = (cluster) => {
    dispatch(getMovieAction(cluster));
  };

  const renderCol2 = () => {
    return cinemaCluster.map((cluster, index) => {
      return (
        <TableRow key={index}>
          <TableCell>
            <p>{cluster.diaChi}</p>
            <Button onClick={() => handleChoiceMovie(cluster.maCumRap)}>
              <p>{cluster.maCumRap}</p>
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };

  // ---------------------------

  const renderCol3 = () => {
    //Dung roi, phai bam nut' cai' ham` moi' chay,
    return cinemaMovie.danhSachPhim?.map((movie, index) => {
      return (
        <TableRow key={index}>
          <TableCell>
            <Grid container spacing={3}>
              <Grid
                item
                xs={6}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img width="50px" src={movie.hinhAnh} alt="" />
              </Grid>
              <Grid item xs={6}>
                <p>{cinemaMovie.maCumRap}</p>
                <p>{movie.tenPhim}</p>
                <p>{movie.maPhim}</p>
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead></TableHead>
        <TableBody>
          <TableRow>
            <TableCell><div className={classes.fixoverflow}>{renderCol1()}</div></TableCell>

            <TableCell><div className={classes.fixoverflow}> {renderCol2()}</div></TableCell>

            <TableCell><div className={classes.fixoverflow}> {renderCol3()}</div></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
