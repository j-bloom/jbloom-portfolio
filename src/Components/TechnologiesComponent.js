import React from "react";
import Technologies from "../Data/TechnologiesData.json";

function TechnologiesComponent() {
  return (
    <div>
      <div className="technology-item">
        {Technologies.map(item => {
          return (
            <div key={item.id}>
              <img src={item.img} alt="Technologies used"/>
              <p>{item.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default TechnologiesComponent;
