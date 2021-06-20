import {
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMovieDetailAction,
  getMovieDetailClusterAction,
} from "../../store/action/movie.action";
import { withRouter } from "react-router";
import ShowTime from "../../components/show-time/show-time.component";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import format from "date-format";
import Paper from "@material-ui/core/Paper";
import { Link } from 'react-router-dom';
import {
  getCinemaClusterAction,
  getCinemaListAction,
  getCinemaMovieAction,
} from "../../store/action/cinema.action";

class MovieDetail extends Component {
  state = {
    choice: 1,
  };
  render() {
    const {
      movieDetail,
      loading,
      cinemaCluster,
      cinemaList,
      movieDetailCluster,
    } = this.props;

    // console.log(movieDetailCluster);
    if (loading) {
      return <h1>Loading...</h1>;
    }

    // console.log("choice", this.state.choice);
    // console.log("cinemaList", cinemaList);
    const handleChoiceCinema = (cinema) => {
      // console.log(cinema);
        this.props.dispatch(getCinemaClusterAction(cinema))
    };

    const handleChoiceMovie = (cluster) => {
        this.props.dispatch(getMovieDetailClusterAction(cluster))
    };

    const renderThongTin = () => {
      return (
        <Container>
          <Grid container>
            <Grid item md={6}>
              <Grid container>
                <p>
                  Ngày công chiếu:{" "}
                  {format("MM/dd/yy", new Date(movieDetail.ngayKhoiChieu))}
                </p>
              </Grid>
            </Grid>
            <Grid item md={6}></Grid>
          </Grid>
        </Container>
      );
    };

    const renderCol1 = () => {
      return cinemaList.map((cinema, index) => {
        return (
          <TableRow key={index}>
            <TableCell>
              <Button onClick={() => handleChoiceCinema(cinema.maHeThongRap)}>
                <img width="50px" src={cinema.logo} alt="" />
              </Button>
            </TableCell>
          </TableRow>
        );
      });
    };

    const renderCol2 = () => {
      return cinemaCluster.map((cluster, index) => {
        return (
          <TableRow key={index}>
            <TableCell>
              <Button onClick={() => handleChoiceMovie(cluster.maCumRap)}>
                <p>{cluster.maCumRap}</p>
              </Button>
            </TableCell>
          </TableRow>
        );
      });
    };

    const renderCol3 = () => {
      if (movieDetailCluster.length < 1) {
        return <p>rạp không có lịch chiếu phim</p>;
      } else {
        return movieDetailCluster?.map((movie, index) => {
          return (
            <TableRow key={index}>
              <TableCell>
                <p>Tên phim: {movie.tenPhim}</p>
                <p>Giá vé: {movie.giaVe}</p>
                <Link to={`/booking/${movie.maLichChieu}`}>
                  <p>
                    Ngày chiếu - Giờ chiếu: 
                     {format("MM/dd/yy - hh:mm", new Date(movie.ngayChieuGioChieu))}
                  </p>
                </Link>
                <p>Thời Lượng: {movie.thoiLuong}</p>
                <p>{movie.thongTinRap.tenRap}</p>
                <p>Tên cụm rạp: {movie.thongTinRap.tenCumRap}</p>
              </TableCell>
            </TableRow>
          );
        });
      }
    };

    return (
      <Container maxWidth="lg" style={{ paddingTop: "100px" }}>
        <Grid container>
          <Grid item lg={4} md={3} sm={3} xs={12}>
            <CardMedia component="img" image={movieDetail.hinhAnh} />
          </Grid>
          <Grid item lg={4} md={9} sm={9} xs={12}>
            <Typography variant="h3">{movieDetail.tenPhim}</Typography>
            <Typography variant="h3">
              {format("MM/dd/yy", new Date(movieDetail.ngayKhoiChieu))}
            </Typography>
          </Grid>
          <Grid item lg={4} md={9} sm={9} xs={12}>
            <Typography variant="h3">
              Đánh giá: {movieDetail.danhGia}
            </Typography>
          </Grid>
        </Grid>
        <Button
          onClick={() => {
            this.setState({
              choice: 1,
            });
          }}
        >
          Lịch Chiếu
        </Button>
        <Button
          onClick={() => {
            this.setState({
              choice: 2,
            });
          }}
        >
          Thông Tin
        </Button>
        <Button
          onClick={() => {
            this.setState({
              choice: 3,
            });
          }}
        >
          Đánh Giá
        </Button>

        {this.state.choice === 1 ? (
          <section className="show-time">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead></TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div style={{ overflow: "auto", height: "60vh" }}>
                        {" "}
                        {renderCol1()}
                      </div>
                    </TableCell>

                    <TableCell>
                      <div style={{ overflow: "auto", height: "60vh" }}>
                        {" "}
                        {renderCol2()}
                      </div>
                    </TableCell>

                    <TableCell>
                      <div style={{ overflow: "auto", height: "60vh" }}>
                        {" "}
                        {renderCol3()}
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* <ShowTime /> */}
          </section>
        ) : (
          ""
        )}
        {this.state.choice === 2 ? (
          <section className="thong-tin">{renderThongTin()}</section>
        ) : (
          ""
        )}
        {this.state.choice === 3 ? (
          <section className="danh gia">đánh giá</section>
        ) : (
          ""
        )}
      </Container>
    );
  }
  async componentDidMount() {
    const { movieCode } = this.props.match.params;
    this.props.dispatch(getMovieDetailAction(movieCode));
    this.props.dispatch(getCinemaListAction());
    this.props.dispatch(getCinemaListAction());
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
    loading: state.common.loading,
    cinemaCluster: state.cinema.cinemaCluster,
    cinemaList: state.cinema.cinemaList,
    movieDetailCluster: state.movie.movieDetailCluster,
  };
};

export default connect(mapStateToProps, null)(withRouter(MovieDetail));


