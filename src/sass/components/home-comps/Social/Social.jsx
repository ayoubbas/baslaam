import React from "react";
import { FaDribbble, FaGithub, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home__social">
      <a
        className="home__social-1"
        href="http://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        
      >
        <FaInstagram />
      </a>
      <a
      className="home__social-2"
        href="http://www.dribbble.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDribbble />
      </a>
      <a
      className="home__social-3"
        href="http://www.github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Social;
