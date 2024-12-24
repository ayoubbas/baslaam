import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="title">
          <h1 className="section__title">Skills</h1>
          <p className="section__subtitle">My technical level</p>
        </div>
        <div className="skills__content">
          <div className="skills__content--frontend"></div>
          <div className="skills__content--backend"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
