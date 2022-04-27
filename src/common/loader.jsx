import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="spinner-border text-primary " role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
}

export default Loader;
