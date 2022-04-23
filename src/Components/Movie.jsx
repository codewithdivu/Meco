import React, { Component } from "react";

class Movie extends Component {
  state = {};
  render() {
    return (
      <div
        className="container-fluid d-flex flex-row min-vh-100 justify-content-center row"
        id="container"
      >
        {this.props.movieObj.map((c) => (
          <div key={c.id} className="card" style={{ width: 19 + "rem" }}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + c.poster_path}
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{c.original_title}</h5>
              <p className="card-text">{c.overview}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Movie;
