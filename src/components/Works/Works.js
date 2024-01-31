import React from "react";
import "./works.css";
import Folio1 from "../../assets/folio1.PNG";
import Folio2 from "../../assets/folio2.PNG";
import Folio3 from "../../assets/folio3.PNG";
import Folio4 from "../../assets/folio4.PNG";
import FolioImg from "../../assets/portfolioImg.webp";
import Folio5 from "../../assets/calculator.PNG";
import Folio6 from "../../assets/landingPage.PNG";

const Works = () => {
  return (
    <div>
      <section className="works">
        <h2 className="workTitle">
          My Portfolio{" "}
          <img src={FolioImg} alt="folioImg" className="folioImg"></img>{" "}
        </h2>
        <span className="workDesc">
          {" "}
          Here are a few deployed projects and assignments I've worked on so
          far...
        </span>

        <div className="workImgs">
          {/* {[Folio3, Folio4, Folio1, Folio2, Folio5, Folio6].map((item) => (
            <div className="workImg-div">
              <img src={item} alt="" className="workImg" />
            </div>
          ))} */}
          <a href="https://serene-pavlova-a81a7b.netlify.app/" target="blank">
            <img src={Folio3} alt="" className="workImg" />
          </a>

          <a href="https://dapper-gumption-b48f17.netlify.app/" target="blank">
            <img src={Folio4} alt="" className="workImg" />
          </a>

          <a href="https://gleaming-heliotrope-51f6ca.netlify.app/" target="blank">
          <img src={Folio1} alt="" className="workImg" />
          </a>

          <a href="https://quiet-kashata-41bba7.netlify.app/" target="blank">
          <img src={Folio2} alt="" className="workImg" />
           </a>

           <a href="https://tinyurl.com/AltSchool-Circle-31-Calc" target="blank">
          <img src={Folio5} alt="" className="workImg" /> 
          </a>

          <a href="https://jade-pithivier-1367bc.netlify.app/" target="blank">
            {" "}
            <img src={Folio6} alt="" className="workImg" />{" "}
          </a>
          
        </div>

        <button className="workBtn">See More...</button>
      </section>
    </div>
  );
};

export default Works;
