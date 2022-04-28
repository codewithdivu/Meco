import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    const { poster_path, original_title, release_date } = this.props.movie;
    return (
      <div className="card m-2" style={{width: '18rem'}}>
        <img
          className="card-img-top"
          src={"https://image.tmdb.org/t/p/original" + poster_path}
          alt="Card image cap"
        />
        <div className="card-body">
          <h3>{original_title}</h3>
          <h3>{release_date}</h3>
        </div>
      </div>
    );
  }
}

export default MovieCard;
