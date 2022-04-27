import React, { Component } from "react";
import "../css/Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="https://www.instagram.com/divuu0017/">
              <i className="icon ion-social-instagram"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-linkedin"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100006345046345">
              <i className="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright">Meco © 2022</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
