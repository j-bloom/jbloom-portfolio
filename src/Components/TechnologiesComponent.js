import React from "react";
import Table from "react-bootstrap/Table";
import Technologies from "../Data/TechnologiesData.json";
import "../css/technologies.css";

function TechnologiesComponent() {
  return (
    <div  className="tech--page">
      {Technologies.map((item) => {
        return (
          <div className="tech__items">
            <br></br>
            <img src={item.img} className="tech__img" />
            <h2 className="tech__name">{item.content}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default TechnologiesComponent;

// <div key={item.id}>
//             <img src={item.img} alt="Technologies used" className="tech__img" />
//             <h1>{item.content}</h1>
//           </div>
