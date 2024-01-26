import React from "react";
import "./into.css";
import bgPic from "../../assets/bgPics.PNG";
import { Link } from "react-scroll";
import phone from "../../assets/phone.svg";

const Intro = () => {
  return (
    <div>
      <section className="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Oluchi </span>
            <br />
            Frontend Developer
          </span>
          <p className="introPara">
            I a frontend developer with little experience in <br />
            creating visually appealing and user friendly interfaces.
          </p>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="btn">
              <img src={phone} alt="" className="btnImg" /> Hire Me
            </button>
          </Link>
        </div>
        <img src={bgPic} alt="intoPic" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
