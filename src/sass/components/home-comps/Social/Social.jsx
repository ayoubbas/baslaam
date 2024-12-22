import React from "react";
import { FaDribbble, FaGithub, FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="http://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        
      >
        <FaInstagram />
      </a>
      <a
        href="http://www.dribbble.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDribbble />
      </a>
      <a
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
