import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faFile,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FaBeer, FaRegEnvelope } from "react-icons/fa";
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
                  <IoHomeOutline />
                  Home
                </a>
              </li>
              <li className="nav__list--item">
                <a href="#about" className="nav__list--link">
                  <CiUser />
                  About
                </a>
              </li>
              <li className="nav__list--item">
                <a href="skills" className="nav__list--link">
                  <CiFileOn />
                  Skills
                </a>
              </li>
              <li className="nav__list--item">
                <a href="#services" className="nav__list--link">
                  <IoBriefcaseOutline />
                  Services
                </a>
              </li>
              <li className="nav__list--item">
                <a href="#portfolio" className="nav__list--link">
                  <CiImageOn />
                  Portfolio
                </a>
              </li>
              <li className="nav__list--item">
                <a href="#contact" className="nav__list--link">
                  <FaRegEnvelope />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__toggle">
            <li className="nav__app">
              <AiOutlineAppstore />
            </li>
            <li className="nav__close">
              <IoCloseOutline />
            </li>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
