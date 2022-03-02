import React from "react";
import Technologies from "../Data/TechnologiesData.json";
import "../css/technologies.css";

function TechnologiesComponent() {
  return (
    <div className="tech--page">
      <h3 className="tech--page__language">Programming Languages</h3>
      <div className="tech__items">
        {Technologies.map((item) => {
          if (item.langType === "Programming") {
            return (
              <img
                src={item.img}
                className="tech--img__programming"
                alt="technology used"
              />
            );
          }
          return true;
        })}
      </div>
      <h3 className="tech--page__language">Web Languages & Frameworks</h3>
      <div className="tech__items">
        {Technologies.map((item) => {
          if (item.langType === "WebDevelopment") {
            return (
              <img
                src={item.img}
                className="tech--img__webdev"
                alt="technology used"
              />
            );
          }
          return true;
        })}
      </div>
      <h3 className="tech--page__language">Databases</h3>
      <div className="tech__items">
        {Technologies.map((item) => {
          if (item.langType === "Database") {
            return (
              <img
                src={item.img}
                className="tech--img__db"
                alt="technology used"
              />
            );
          }
          return true;
        })}
      </div>
    </div>
  );
}

export default TechnologiesComponent;
