import React, { Component } from "react";
import CardSlider from "../common/cardSlider";
import InfiniteSlider from "../common/infiniteSlider";
import { sliderItems } from "../constants/metadata";
import { fetchMovies } from "../services/movieService";

class Movies extends Component {
  state = {
    result: [],
  };

  async fetchData() {
    const response = await fetchMovies('popular');
    this.setState({ result: response });
  }

  componentDidMount() {
    this.fetchData();
  }


  render() {
    return (
      <div className="container">
        <CardSlider movieObj={this.state.result} />
        {sliderItems?.map((movieTypeObj) => (
          <InfiniteSlider key={movieTypeObj.id} movieTypeObj={movieTypeObj} />
        ))}
      </div>
    );
  }
}

export default Movies;
