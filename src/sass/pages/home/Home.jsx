import React from "react";
import Social from "../../components/Social/Social";
import Data from "./Data";
import Image from "./Image";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container ">
        <div className="home-content">
          <Social />
          <Image />
          <Data />
        </div>
      
      </div>
    </section>
  );
};

export default Home;
