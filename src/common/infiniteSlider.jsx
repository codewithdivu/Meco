import React, { Component } from "react";
import Slider from "react-slick";
import { fetchMovies } from "../services/movieService";
import { Link } from "react-router-dom";

class InfiniteSlider extends Component {
  state = {
    result: [],
  };

  async fetchData(keyword) {
    const response = await fetchMovies(keyword);
    this.setState({ result: response });
  }

  componentDidMount() {
    this.fetchData(this.props.movieTypeObj?.movieType);
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      beforeChange: (index) => {
        console.log(index);
      },
      focusOnSelect: true,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { result } = this.state;
    return (
      <div className="p-4">
        <Link to={this.props.movieTypeObj.path}><h3>{this.props.movieTypeObj?.label}</h3></Link>
        <Slider {...settings}>
          {result?.map((movie) => (
            <div key={movie.id} className="card" style={{ width: 19 + "rem" }}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h6 className="card-title">{movie.original_title}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default InfiniteSlider;
