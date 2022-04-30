import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Movies from './pages/Movies';
import TvShows from './pages/tvShows';
import { AIRING_TODAY_TV, HOME, MOVIES, MOVIE_DETAIL, NOTFOUND, NOW_PLAYING_MOVIES, ON_THE_AIR_TV, POPULAR_MOVIES, POPULAR_TV, TOP_RATED_MOVIES, TOP_RATED_TV, TVSHOWS, TV_DETAIL, UPCOMING_MOVIES, WEBSERIES } from './constants';
import Loader from './common/loader';

const MoviesLayout = lazy(() => import('./layout/moviesLayout'))
const TVLayout = lazy(() => import('./layout/tvLayout'))
const NotFound = lazy(() => import('./pages/404'))
const AiringTodayTV = lazy(() => import('./pages/airingTodayTV'))
const MovieDetailPage = lazy(() => import('./pages/movieDetailPage'))
const NowPlayingMovies = lazy(() => import('./pages/nowPlayingMovies'))
const OnTheAirTV = lazy(() => import('./pages/onTheAirTV'))
const PopularMovies = lazy(() => import('./pages/popularMovies'))
const PopularTV = lazy(() => import('./pages/popularTV'))
const TopRatedMovies = lazy(() => import('./pages/topRatedMovies'))
const TopRatedTV = lazy(() => import('./pages/topRatedTV'))
const TVDetailPage = lazy(() => import('./pages/tvDetailPage'))
const UpcomingMovies = lazy(() => import('./pages/upcomingMovies'))
const AppLayout = lazy(() => import('./layout/appLayout'));



function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>
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
              <Route path={AIRING_TODAY_TV} element={<AiringTodayTV />} />
              <Route path={ON_THE_AIR_TV} element={<OnTheAirTV />} />
              <Route path={POPULAR_TV} element={<PopularTV />} />
              <Route path={TOP_RATED_TV} element={<TopRatedTV />} />
            </Route >

            <Route path={NOTFOUND} element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
