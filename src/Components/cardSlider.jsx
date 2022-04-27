import React, { Component } from "react";

class CardSlider extends Component {
  state = {
    index: 1,
  };

  handlePrevious = () => {
    // console.log('clicked on previous');
    this.setState({
      index: this.state.index - 1,
    });
  };

  handleNext = () => {
    // console.log("clicked on next");
    this.setState({
      index: this.state.index + 1,
    });
  };

  render() {
    const { movieObj } = this.props;
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {
            <div className="carousel-item active">
              <img
                src={
                  "https://image.tmdb.org/t/p/w500" +
                  movieObj[this.state.index]?.poster_path
                }
                className="d-block w-100"
                alt="..."
              />
            </div>
          }
        </div>

        {
          <a
            onClick={this.handlePrevious}
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
        }
        {console.log("index && arrayLength", this.state.index, movieObj.length)}
        {this.state.index > movieObj?.length - 1 ? (
          this.setState({ index: 1 })
        ) : (
          <a
            onClick={this.handleNext}
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        )}
      </div>
    );
  }
}

export default CardSlider;
