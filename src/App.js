import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Movies from './Components/Movies';
import TvShows from './Components/tvShows';
import WebSeries from './Components/webSeries';
import { HOME, MOVIES, NOTFOUND, TVSHOWS, WEBSERIES } from './constants';
import AppLayout from './layout/appLayout';
import NotFound from './pages/404';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path={HOME} element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={MOVIES} element={<Movies />} />
          <Route path={TVSHOWS} element={<TvShows />} />
          <Route path={WEBSERIES} element={<WebSeries />} />
          <Route path={NOTFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
