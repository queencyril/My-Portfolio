import React from "react";
import "./skills.css";
import Emoji from "../../assets/emoji2.jpeg";

const Skills = () => {
  return (
    <div>
      <section className="skills">
        <span className="skillTitle">
          Who Am I? <img src={Emoji} alt="emoji" className="emoji"></img>{" "}
        </span>
        <span className="skillDesc">
          Hello Again!!!, My name is{" "}
          <span className="text">Iheagwara Oluchi Queen</span>. I'm thrilled to introduce myself as a frontend developer
          on a mission to create visually stunning and user-friendly web
          experiences. My passion for coding and design has led me to pursue a
          career in the exciting world of web development, where I strive to
          make a meaningful impact through my work. <br />
          With a solid foundation in{" "}
          <span className="text">HTML, CSS, JavaScript</span> and{" "}
          <span className="text"> REACTJS</span>, I have been honing my skills
          to craft engaging and responsive websites. I believe that a
          well-designed frontend is the key to captivating users and enhancing
          their overall browsing experience. <br />
          As an aspiring frontend developer, I am enthusiastic about joining a
          dynamic team where I can contribute my skills, learn from experienced
          professionals, and collaborate on exciting projects. I am driven by a
          strong desire to grow as a developer, continuously pushing my limits
          and embracing new challenges along the way. <br />
          Thank you for taking the time to learn a little about me. I look
          forward to connecting with fellow developers, designers, and
          like-minded individuals who share my passion for frontend development.
          Together, let's create immersive and captivating digital experiences
          that make a difference!
        </span>
      </section>
    </div>
  );
};

export default Skills;
