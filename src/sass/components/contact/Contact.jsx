import React, { useState } from "react";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaArrowRightLong, FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <section className="contact section">
      <div className="container">
        <div className="title">
          <h1 className="section__title">Contact Me</h1>
          <p className="section__subtitle">Get in touch</p>
        </div>

        <div className="contact__cards">
          <div className="contact__cards--talk">
            <h2 className="contact__card-title">Talk to Me!</h2>
            <div className="contact__cards--talk-content">
              {/* itemssss */}

              <div className="contact__cards--talk-content-item">
                {/* item */}
                <BsFillEnvelopeAtFill className="item-icon" />
                <h2>Email</h2>
                <p>user@gmail.com</p>
                <a href="examplemail@gmail.com" target="__blank">
                  Write me <FaArrowRightLong className="link-icon" />
                </a>
              </div>
              <div className="contact__cards--talk-content-item">
                {/* item */}
                <FaWhatsapp className="item-icon" />

                <h2>Whatsapp</h2>
                <p>0672397065</p>
                <a
                  target="__blank"
                  href="https://api.whatsapp.com/send?phone=+212672397065&text=Hello,%20more%20information"
                >
                  Write me <FaArrowRightLong className="link-icon" />
                </a>
              </div>
              <div className="contact__cards--talk-content-item">
                {/* item */}
                <CiLinkedin className="item-icon" />

                <h2>LinkedIn</h2>
                <p>ayoub baslam</p>
                <a href="#" target="__blank">
                  Write me <FaArrowRightLong className="link-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact__cards--write">
            <h2 className="contact__card-title">Write to Me!</h2>
            <div className="contact__cards--write-content">
              <form
                action="https://formsubmit.co/abardayou@gmail.com"
                method="POST"
              >
                <div className="name-div block">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    className="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mail-dev block">
                  <label htmlFor="email">Mail</label>
                  <input
                    type="email"
                    placeholder="Email address"
                    id="email"
                    className="email"
                    name="email"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="texterea block">
                  <label htmlFor="project">Project</label>
                  <textarea
                    placeholder="Write about your project..."
                    name="project"
                    id="project"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="button">
                  Send message{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
