import React from "react";
import Data from "../../components/data-home/Data"
import Social from "../../components/Social/Social";
import Image from "../../components/home-comps/image-home/Image";

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
