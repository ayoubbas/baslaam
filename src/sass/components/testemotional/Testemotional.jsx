import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Web Developer",
    testimonial:
      "This service is fantastic! Highly recommend it to anyone looking for quality work.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    testimonial:
      "Amazing experience! The team was very professional and delivered on time.",
  },
  {
    id: 3,
    name: "Sam Wilson",
    role: "Product Manager",
    testimonial:
      "They exceeded our expectations in every way. Top-notch quality!",
  },
];
const Testemotional = () => {
  return (
    <section className="testemotional section">
      <div className="container">
        <div className="title">
          <h1 className="section__title">Testimonial</h1>
          <p className="section__subtitle">My clients say</p>
        </div>
      </div>
    </section>
  );
};

export default Testemotional;
