import React, { Component } from "react";

class CardSlider extends Component {
  state = {
    index: 1,
    setintervalId: null,
  };

  handlePrevious = () => {
    this.setState({
      index:
        this.state.index <= 0
          ? this.props.movieObj.length - 1
          : this.state.index - 1,
    });
  };

  handleNext = () => {
    // console.log("clicked on next");
    this.setState({
      index:
        this.state.index >= this.props.movieObj.length - 1
          ? 0
          : this.state.index + 1,
    });
  };
  componentDidMount() {
    let x = setInterval(this.handleNext, 3000);
    this.setState({ setintervalId: x });
  }

  componentWillUnmount() {
    this.state.setintervalId && clearInterval(this.state.setintervalId);
  }

  render() {
    const { movieObj } = this.props;
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide mx-auto w-50"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {
            <div className="carousel-item active">
              <img
                src={
                  "https://image.tmdb.org/t/p/w500" +
                  movieObj[this.state.index]?.backdrop_path
                }
                className="d-block w-100 "
                alt="..."
              />
            </div>
          }
        </div>

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

        {console.log("index && arrayLength", this.state.index, movieObj.length)}

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
      </div>
    );
  }
}

export default CardSlider;
