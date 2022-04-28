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
            <a
              onClick={handlePrevious}
              className="page-link"
              href="#"
              tabindex="-1"
            >
              Previous
            </a>
          </li>

          <li className="page-item">
            <a onClick={handleNext} className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
