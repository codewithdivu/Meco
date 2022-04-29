import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Movies from './Components/Movies';
import TvShows from './Components/tvShows';
import WebSeries from './Components/webSeries';
import { HOME, MOVIES, MOVIE_DETAIL, NOTFOUND, NOW_PLAYING_MOVIES, POPULAR_MOVIES, TOP_RATED_MOVIES, TVSHOWS, UPCOMING_MOVIES, WEBSERIES } from './constants';
import AppLayout from './layout/appLayout';
import MoviesLayout from './layout/moviesLayout';
import NotFound from './pages/404';
import MovieDetailPage from './pages/movieDetailPage';
import NowPlayingMovies from './pages/nowPlayingMovies';
import PopularMovies from './pages/popularMovies';
import TopRatedMovies from './pages/topRatedMovies';
import UpcomingMovies from './pages/upcomingMovies';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path={HOME} element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={MOVIES} element={<MoviesLayout />}>
            <Route index element={<Movies />} />
            <Route path={MOVIE_DETAIL} element={<MovieDetailPage />} />
            <Route path={POPULAR_MOVIES} element={<PopularMovies />} />
            <Route path={UPCOMING_MOVIES} element={<UpcomingMovies />} />
            <Route path={NOW_PLAYING_MOVIES} element={<NowPlayingMovies />} />
            <Route path={TOP_RATED_MOVIES} element={<TopRatedMovies />} />
          </Route>
          <Route path={TVSHOWS} element={<TvShows />} />
          <Route path={WEBSERIES} element={<WebSeries />} />
          <Route path={NOTFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
