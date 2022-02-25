import React from "react";
import APICaller from "../Data/APICaller";

function MyWorkComponent() {

  const { projects, error, loading } = APICaller();

  if(loading) return <h1>Loading Data...</h1>;
  if(error) console.log(error);
  return (
    <div>
      <div className="portfolio">
        <div className="portfolio__item">

          {projects.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.html_url}</p>
                <p>{item.language}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyWorkComponent;
