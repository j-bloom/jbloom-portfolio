import React from "react";
import APICaller from "../Data/APICaller";

function MyWork() {
  const { projects, error, loading } = APICaller();

  if (loading) return <h1>Loading Data...</h1>;
  if (error) console.log(error);
  return (
    <div>
      <div>
        {projects.map((item) => {
          return (
            <div key={item.id} className="portfolio__item">
              <p>{item.name}</p>
              <a href={item.html_url}>{item.html_url}</a>
              <p>{item.language}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyWork;
