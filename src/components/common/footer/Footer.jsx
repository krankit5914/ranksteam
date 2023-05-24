import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>Ranks Team</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            {/* <p>This is Ranks Team (:</p> */}
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                India
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +91 9570520810
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                teamranks1@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart"></i> by Ranks Team
        </p>
      </div>
    </>
  );
};

export default Footer;
