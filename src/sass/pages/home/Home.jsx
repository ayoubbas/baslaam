import React from "react";
import Social from "../../components/Social/Social";
import Data from "./Data";
import Image from "./Image";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home-content grid">
          <Social />
          <Image />
          <Data />
        </div>
      
      </div>
    </section>
  );
};

export default Home;
