import React from "react";
import "./cv.css";
import Mau from "../../assets/madonnaLogo.jpg";
import Alt from "../../assets/altLogo.png";
import Skl from "../../assets/sklLogo.png";
import Robotics from "../../assets/roboticLogo.jpg";
import Lekki from "../../assets/lekkiLogo.jpg";
import Chelsea from "../../assets/hotelLogo.png";
import CvImg from "../../assets/cvIcon.png";

const Cv = () => {
  return (
    <div>
      <div className="clients">
        <h1 className="contactPageTitle">
          My Curriculum Vitae{" "}
          <img src={CvImg} alt="cvImg" className="cvImg"></img>
        </h1>

        <h2 className="cvIntro">EDUCATION</h2>

        <div className="skillBars">
          <div className="skillBar">
            <img src={Alt} alt="AltLogo" className="skillBarImg" />
            <div className="skillBarText">
              <h2>AltSchool Of Software Engineering</h2>
              <p>Mar 2023 - Present</p>
              <h4>Degree: Frontend Engineering</h4>
            </div>
          </div>

          <div className="skillBar">
            <img src={Mau} alt="MauLogo" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Madonna University</h2>
              <p>Sept 2016 - Dec 2020</p>
              <h4>Degree: BSc in Computer Science</h4>
            </div>
          </div>

          <h2 className="cvIntro2">EXPERIENCE</h2>

          <div className="skillBar">
            <img src={Lekki} alt="MauLogo" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Lekki Gardens</h2>
              <p>Sept 2023 - Present (Lagos)</p>
              <h3>Job Description: Administrator's Assistant</h3><br/>

              <p>
                -Greeting visitors, helping them navigate through an office, and
                supplying them with refreshments as they wait. <br />
                -Answer, screen, and forward incoming phone calls and direct
                visitors to the right person or department. <br />
                -Maintain the office and keep all the office equipment in check
                as well as order any necessary office supplies. <br />
                -Responsible for maintaining office security and communicating
                with the security guards if needed.
              </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={Robotics} alt="MauLogo" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Robotics Africa</h2>
              <p>Nov 2022 - July 2023 (Lagos)</p>
              <h3>Job Description: Robotics trainer (instructor)</h3><br/>
              <p>
                We were responsible for the training of young students and
                pupils on simple robotics projects alongside building these
                projects too. <br />
                We made sure they knew the basis of Robotics and how they work
                and can be used or applied in real life situations in our homes
                and in our nation at large.
              </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={Skl} alt="MauLogo" className="skillBarImg" />
            <div className="skillBarText">
              <h2>China Brain Field Academy</h2>
              <p>Nov 2021 - Oct 2022 (Asaba)</p>
              <h3>Job Description: I.T.C Classroom Teacher(NYSC)</h3><br/>
              <p>
                -Classroom Management <br />
                -Preparing lesson plans and notes <br />
                -Teaching kids and marking their notes <br />
                -Giving assignments, marking and doing the corrections
                <br />
                -Taking care of kids and handling their first aid whenever they
                get injured
                <br />
                -Handling the assembly in the morning -Assisted as well during
                their sporting days to handle their training.
              </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={Chelsea} alt="MauLogo" className="skillBarImg" />
            <div className="skillBarText">
              <h2>New Chelsea Hotel Limited</h2>
              <p>April 2019 - Oct 2019 (Abuja)</p>
              <h3>Job Description:Information and Technology Intern</h3><br/>
              <p>
                We were responsible for handling every breakdown of computer
                systems and fixing the problems either hardware or software
                issues (troubleshooting).
                <br />
                We programmed keycards for doors, set up projectors and
                microphones for board meetings and events and as well cctv
                cameras, making sure it is in order and always working
                perfectly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cv;
