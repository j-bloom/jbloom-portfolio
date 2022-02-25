import React from "react";
import AboutMe from "../Components/AboutMeComponent";
import Footer from "../Components/Footer";
import MyWorkComponent from "../Components/MyWorkComponent";
import Technologies from "../Data/TechnologiesData.json";

import ProfilePhoto from "../images/portfoliophoto-placeholder.jpg";

function HomePage() {
  return (
    <div>
      {/* Introduction section */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Jaron Bloom</strong>
        </h1>
        <p className="section__subtitle secttion__subtitle--intro">
          Software Developer
        </p>
        <img
          src={ProfilePhoto}
          alt="Jaron"
          style={{ height: "100px" }}
        />
      </section>

      {/* My Technologies Section */}
      <section className="my-technologies" id="technology">
        <h1 className="section__title section__title--technology">
          Some of the daily technologies I use...
        </h1>
        {/* Below code is to ensure only certain objects get shown 
          on main page to not over crowd it more objects are displayed 
          on the Technologies page */}
        {Technologies.map(item => {
          if(item.id < 3){
          return (    
            <div key={item.id}>
              <img src={item.img} alt=""/>
              <p>{item.content}</p>
            </div>
          )
        }
        return true;
        })}
      </section>

      {/* About Me Section */}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am...</h2>
        <p className="section__subtitle section__subtitle--about"></p>

        <div className="about-me__body">
          <AboutMe />
        </div>
        <img
          src={ProfilePhoto}
          alt="Jaron"
          style={{ height: "100px" }}
        />
      </section>

      {/* My Work Section */}
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work...</h2>
        <p className="section__subtitle ">Here are some of my works</p>
        <MyWorkComponent />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default HomePage;
