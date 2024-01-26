import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import phone from "../../assets/phone.svg";
import myLogo from "../../assets/myLogo.PNG";
import menu from "../../assets/menu.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <img src={myLogo} alt="logo" className="logo" />

        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktoplist"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="desktoplist"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="desktoplist"
          >
            CV
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktoplist"
          >
            About
          </Link>
        </div>

        <Link activeClass="none" to="contact"  smooth={true} offset={-70} duration={500}>
          <button className="desktopbtn">
            <img src={phone} alt="" className="desktopbtnimg" /> Contact Me
          </button>{" "}
        </Link>

        <img
          src={menu}
          alt="menu"
          className="mobileMenu"
          onClick={() => setShowMenu(!showMenu)}
        />

        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            CV
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
