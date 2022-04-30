import React from "react";
import "../css/movieDetails.css";

const MovieDetails = ({ movieData }) => {
  // console.log("movieData :>> ", movieData);
  return (
    <div
      className="container banner d-flex vw-100  p-5 vh-50"
      style={{
        background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(https://image.tmdb.org/t/p/original${movieData.backdrop_path}) no-repeat right top`,
        backgroundSize: "cover",
      }}
    >
      <div className="d-flex w-25">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movieData.poster_path}
            className="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div className="d-flex flex-column w-75 mx-3">
        <h1>{movieData.original_title}</h1>
        <h6>{movieData.release_date}</h6>
        <p>{movieData.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
