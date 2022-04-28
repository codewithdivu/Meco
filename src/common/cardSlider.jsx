import React, { Component } from "react";
import Slider from "react-slick";

class CardSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    const { movieObj } = this.props;
    return (
      <Slider {...settings}>
        {movieObj.map((movie) => (
          <div key={movie.id} style={{ backgroundColor: "red", width: "100%" }}>
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
              className="m-auto"
              style={{
                width: "50vw",
                // height: "100vh",
                // objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    );
  }
}

export default CardSlider;
