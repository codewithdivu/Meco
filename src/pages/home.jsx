import React, { Component } from "react";
import '../css/home.css';
import nature from '../images/nature.mp4';
class Home extends Component {
  state = {};
  render() {
    return (
      <video autoPlay muted loop id="myVideo">
        <source src={nature} type="video/mp4" />
      </video>
    );
  }
}

export default Home;
