import React, { Component } from 'react';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Movies />
    </React.Fragment>
  );
}

export default App;
