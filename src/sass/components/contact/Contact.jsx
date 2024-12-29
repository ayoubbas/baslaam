import React from "react";

const Contact = () => {
  return (
    <section className="contact section">
      <div className="title">
        <h1 className="section__title">Contact Me</h1>
        <p className="section__subtitle">Get in touch</p>
      </div>

      <div className="contact__cards">
        <div className="contact__cards--talk">
          <h2 className="contact__card-title">Talk to Me!</h2>
          <div className="contact__cards-content">
            <div className="contact__cards-content-item">
                <h2></h2>
            </div>
          </div>
        </div>
        <div className="contact__cards--write">
          <h2 className="contact__card-title">Write to Me!</h2>
          <div className="contact__cards-content"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
