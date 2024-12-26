import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Web Developer",
    testemotional:
      "This service is fantastic! Highly recommend it to anyone looking for quality work.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    testemotional:
      "Amazing experience! The team was very professional and delivered on time.",
  },
  {
    id: 3,
    name: "Sam Wilson",
    role: "Product Manager",
    testemotional:
      "They exceeded our expectations in every way. Top-notch quality!",
  },
];
const Testemotional = () => {
  const sittings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <section className="testemotional section">
      <div className="container">
        <div className="title">
          <h1 className="section__title">Testimonial</h1>
          <p className="section__subtitle">My clients say</p>
        </div>
        <Slider {...sittings}>
            {testimonials.map((testemotional)=>(
                <div className="testemotional-card">
                    <p className="testemotional-text">{testemotional.testemotional}</p>
                    <h3 className="testemotional-name">{testemotional.name}</h3>
                    <p className="testemotional-role">{testemotional.role}</p>
                </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testemotional;
