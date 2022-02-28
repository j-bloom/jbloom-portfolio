import React from "react";
import APICaller from "../Data/APICaller";
import "../css/my-work.css";

function MyWorkComponent() {

  const { projects, error, loading } = APICaller();

  if(loading) return <h1>Loading Data...</h1>;
  if(error) console.log(error);
  return (
    <div>
      {/* <div className="portfolio"> */}
        <div>
          {projects.map((item) => {
            if(
              item.name.includes("Ionic-Jokes") || 
              item.name.includes("Ionic-Pizza") ||
              item.name.includes("Xamarin-Joke")){
            return (
              <div key={item.id} className="portfolio__item">
                <p>Project: {item.name}</p>
                <a href={item.html_url} className="btn">{item.html_url}</a>
                <p>Language written in: {item.language}</p>
              </div>
            );}
          })}
        </div>
      {/* </div> */}
    </div>
  );
}

export default MyWorkComponent;
