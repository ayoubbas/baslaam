import React from "react";

import { FaRegEnvelope } from "react-icons/fa";
import {
  IoBriefcaseOutline,
  IoCloseOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { CiFileOn, CiImageOn, CiUser } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Baslaam
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__list--item">
                <a href="#home" className="nav__list--link">
                  <IoHomeOutline className="nav__list--icon" />
                  Home
                </a>
              </li>
              <li className="nav__list--item">
                <a href="#about" className="nav__list--link">
                  <CiUser className="nav__list--icon" />
                  About
                </a>
              </li>
              <li className="nav__list--item">
                <a href="skills" className="nav__list--link">
                  <CiFileOn className="nav__list--icon" />
                  Skills
                </a>
              </li>
              <li className="nav__list--item">
                <a href="#services" className="nav__list--link">
                  <IoBriefcaseOutline className="nav__list--icon" />
                  Services
                </a>
              </li>
              <li className="nav__list--item">
                <a href="#portfolio" className="nav__list--link">
                  <CiImageOn className="nav__list--icon" />
                  Portfolio
                </a>
              </li>
              <li className="nav__list--item">
                <a href="#contact" className="nav__list--link">
                  <FaRegEnvelope className="nav__list--icon" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__toggle">
            <div className="nav__app">
              <AiOutlineAppstore className="nav__list--store" />
            </div>
            <div className="nav__close">
              <IoCloseOutline className="nav__list--close" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
