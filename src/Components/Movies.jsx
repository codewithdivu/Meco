import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  state = {
    result: [],
  };

  async fetchData() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=5e7853fa38844856be15b0d1afefedc3"
    );
    let data = await response.json();
    let arr = data.results;
    // console.log('data',data);
    // console.log('arr',arr);
    this.setState({ result: arr });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return <Movie movieObj={this.state.result} />;
  }
}

export default Movies;
