import React, { Component } from "react";
import CardSlider from "../common/cardSlider";
import InfiniteSlider from "../common/infiniteSlider";
import { tvMetaData } from "../constants/metadata";
import { fetchMovies } from "../services/movieService";
class TvShows extends Component {
  state = {
    result: [],
  };

  async fetchData() {
    const response = await fetchMovies("popular", "tv");
    this.setState({ result: response });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="container">
        <CardSlider movieObj={this.state.result} />
        {tvMetaData?.map((movieTypeObj) => (
          <InfiniteSlider key={movieTypeObj.id} movieTypeObj={movieTypeObj} />
        ))}
      </div>
    );
  }
}

export default TvShows;
