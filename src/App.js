import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Movies from './Components/Movies';
import TvShows from './Components/tvShows';
import WebSeries from './Components/webSeries';
import { AIRING_TODAY_TV, HOME, LATEST_TV, MOVIES, MOVIE_DETAIL, NOTFOUND, NOW_PLAYING_MOVIES, ON_THE_AIR_TV, POPULAR_MOVIES, POPULAR_TV, TOP_RATED_MOVIES, TOP_RATED_TV, TVSHOWS, TV_DETAIL, UPCOMING_MOVIES, WEBSERIES } from './constants';
import AppLayout from './layout/appLayout';
import MoviesLayout from './layout/moviesLayout';
import TVLayout from './layout/tvLayout';
import NotFound from './pages/404';
import AiringTodayTV from './pages/airingTodayTV';
import LatestTV from './pages/latestTV';
import MovieDetailPage from './pages/movieDetailPage';
import NowPlayingMovies from './pages/nowPlayingMovies';
import OnTheAirTV from './pages/onTheAirTV';
import PopularMovies from './pages/popularMovies';
import PopularTV from './pages/popularTV';
import TopRatedMovies from './pages/topRatedMovies';
import TopRatedTV from './pages/topRatedTV';
import TVDetailPage from './pages/tvDetailPage';
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

          <Route path={TVSHOWS} element={<TVLayout />}>
            <Route index element={<TvShows />} />
            <Route path={TV_DETAIL} element={<TVDetailPage />} />
            <Route path={LATEST_TV} element={<LatestTV />} />
            <Route path={AIRING_TODAY_TV} element={<AiringTodayTV />} />
            <Route path={ON_THE_AIR_TV} element={<OnTheAirTV />} />
            <Route path={POPULAR_TV} element={<PopularTV />} />
            <Route path={TOP_RATED_TV} element={<TopRatedTV />} />
          </Route >

          <Route path={WEBSERIES} element={<WebSeries />} />
          <Route path={NOTFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
