import React, { Component } from "react";
import CardMovie from "../common/cardMovie";
import CardSlider from "../common/cardSlider";
import { fetchMovies } from "../services/movieService";

class Movies extends Component {
  state = {
    result: [],
  };

  async fetchData() {
    const response = await fetchMovies('popular');
    // console.log(response);
    this.setState({ result: response });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <CardSlider movieObj={this.state.result} />
        <CardMovie movieObj={this.state.result} />
      </div>
    );
  }
}

export default Movies;
