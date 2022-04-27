import React, { Component } from "react";
import CardSlider from "./cardSlider";
import Movie from "./Movie";

class Movies extends Component {
  state = {
    result: [],
    isDataLoading: false,
  };

  async fetchData() {
    this.setState({
      ...this.state,
      isDataLoading: true,
    });

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=5e7853fa38844856be15b0d1afefedc3"
    );
    let data = await response.json();
    let arr = data.results;
    // console.log('data',data);
    // console.log('arr',arr);
    this.setState({ result: arr, isDataLoading: false });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
        {this.state.isDataLoading ? (
          <div
            class="spinner-border text-primary d-flex flex-column min-vh-100 justify-content-center align-items-center"
            role="status"
          >
            <span class="sr-only">Loadng...</span>
          </div>
        ) : (
          <div>
            <Movie movieObj={this.state.result} />
            <CardSlider movieObj={this.state.result} />
          </div>
        )}
      </>
    );
  }
}

export default Movies;
