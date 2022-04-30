import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { handlePrevious, handleNext, currentPage } = this.props;

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
          >
            <button
              onClick={handlePrevious}
              className="page-link"
              tabindex="-1"
            >
              Previous
            </button>
          </li>

          <li className="page-item">
            <button onClick={handleNext} className="page-link">
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
