import React from "react";
import Technologies from "../Data/TechnologiesData.json";
import "../css/technologies.css";

function TechnologiesComponent() {
  return (
    <div>
      {Technologies.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} alt="Technologies used" />
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TechnologiesComponent;
