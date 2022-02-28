import React from "react";
import TechnologiesComponent from "../Components/TechnologiesComponent";

function TechnologiesPage() {
  return (
    <div className="tech--page">
      <div>
        <h3 className="tech--page--title">These are technologies I use on a regular basis</h3>
        <h4 className="tech--page--subtitle">
          They vary depending on what I am working on and the task being
          performed
        </h4>
      </div>
      <TechnologiesComponent />
    </div>
  );
}

export default TechnologiesPage;
