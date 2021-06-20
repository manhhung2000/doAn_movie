import { Button, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { style } from "./home.style";
import MovieCard from "../../components/movie-card/movie-card.component";
import axios from "axios";
import { connect } from "react-redux";
import { getMovieListAction } from "../../store/action/movie.action";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonSlick } from "./carousel/carousel.css";
import Carousel from "./carousel/carousel";
import { Col } from "react-bootstrap";
import {
  getCinemaClusterAction,
  getCinemaListAction,
  getCinemaMovieAction,
} from "../../store/action/cinema.action";

import { withRouter } from "react-router";
import Cinema from "./cinema/cinema";

import {
  getKhuyenMaiAction,
  getNewsAction,
  getReviewAction,
} from "../../store/action/news.action";

import News from "./news/news";
import BlockApp from "../../components/footer/block-app.component";
import Footer from "../../components/footer-1/footer";

// imp withStyles từ @material-ui/core/styles
// nhận lại thông qua classes
// dùng className={classes.thuộc tính mình đặt bên style}
// export default withStyles()();
class Home extends Component {
  renderMovieList = () => {
    const { movieList, loading } = this.props;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return movieList.map((movie, index) => {
      return (
        <React.Fragment>
          <Col>
            <MovieCard movie={movie} />
          </Col>
        </React.Fragment>
      );
    });
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      rows: 1,
      slidesPerRow: 2,  
    };
    const { classes } = this.props; // được tạo ra khi gọi withStyles
    return (
      <div>
        {/* <Button variant="contained" color="primary" disabled={false}>
          Primary
        </Button>
        <Button className={classes.myBtn} variant="contained" color="secondary" disabled={false}>
          Secondary
        </Button> */}

        {/* CAROUSEL */}
        <Carousel />

        {/* MOVIE LIST */}
        <Container maxWidth="lg">
          {/* Grid container === row */}
          <ButtonSlick>
            <Slider className="slider" {...settings} container>
              {/* Grid item === column */}
              {this.renderMovieList()}
            </Slider>
          </ButtonSlick>

          {/* CINEMA LIST */}
          <Cinema cinemaList={this.props.cinemaList} />

          {/* NEWS */}
          <News />
        </Container>
        {/* BLOCKAPP */}
        <BlockApp />

        {/* FOOTER */}
        <Footer />
      </div>
    );
  }
  async componentDidMount() {
    this.props.dispatch(getMovieListAction());
    this.props.dispatch(getCinemaListAction());
    // this.props.dispatch(getNewsAction());
    // this.props.dispatch(getReviewAction());
    // this.props.dispatch(getKhuyenMaiAction());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
    loading: state.common.loading,
    cinemaList: state.cinema.cinemaList,
    news: state.news.listNews,
  };
};

export default connect(mapStateToProps)(withStyles(style)(withRouter(Home)));
