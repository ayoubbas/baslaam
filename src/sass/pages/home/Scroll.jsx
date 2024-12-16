import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Scroll = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.5,
          }}
        >
          <path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "#000",
              strokeWidth: "20px",
            }}
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "#000",
              strokeWidth: "20px",
            }}
          />
        </svg>
      </a>
      <span className="home__scroll-name">Scroll Down 
      </span>
      <FaArrowDown className="arrow-icon"/>
    </div>
  );
};

export default Scroll;
