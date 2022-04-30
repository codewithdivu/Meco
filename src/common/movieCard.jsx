import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MOVIES, TVSHOWS } from "../constants";
import not_found from "../images/not-found_wallpaper.jpg";
class MovieCard extends Component {
  render() {
    const {
      poster_path,
      original_title,
      release_date,
      id,
      dataType,
      original_name,
      first_air_date,
    } = this.props.movie;
    const redirectPath =
      dataType === "movie"
        ? MOVIES + "/" + id
        : dataType === "tv"
        ? TVSHOWS + "/" + id
        : "#";
    return (
      <div className="card m-2" style={{ width: "18rem" }}>
        <Link to={redirectPath}>
          <img
            className="card-img-top"
            src={
              poster_path
                ? "https://image.tmdb.org/t/p/original" + poster_path
                : not_found
            }
            alt="Card image cap"
          />
        </Link>
        <div className="card-body">
          <h3>
            {dataType === "movie"
              ? original_title
              : dataType === "tv"
              ? original_name
              : "#"}
          </h3>
          <h3>{dataType === "movie" ? release_date : first_air_date}</h3>
        </div>
      </div>
    );
  }
}

export default MovieCard;
