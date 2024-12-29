import React from "react";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaArrowRightLong, FaWhatsapp } from "react-icons/fa6";

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
            {/* itemssss */}
            
            <div className="contact__cards-content-item"> {/* item */}
              <BsFillEnvelopeAtFill />

              <h2>Email</h2>
              <p>user@gmail.com</p>
              <a href="examplemail@gmail.com">
                Write me <FaArrowRightLong />
              </a>
            </div>
            <div className="contact__cards-content-item">{/* item */}
              <FaWhatsapp />

              <h2>Whatsapp</h2>
              <p>0672397065</p>
              <a href="https://api.whatsapp.com/send?phone=+212672397065&text=Hello,%20more%20information">
                Write me <FaArrowRightLong />
              </a>
            </div>
            <div className="contact__cards-content-item">{/* item */}
              <CiLinkedin />

              <h2>LinkedIn</h2>
              <p>ayoub baslam</p>
              <a href="#">
                Write me <FaArrowRightLong />
              </a>
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
