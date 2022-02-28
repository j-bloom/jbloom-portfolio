import React from "react";
import AboutMe from "../Components/AboutMeComponent";
import Footer from "../Components/Footer";
import MyWorkComponent from "../Components/MyWorkComponent";
import Technologies from "../Data/TechnologiesData.json";
import Button from 'react-bootstrap/Button';

import "../css/intro.css";
import "../css/header.css";
import "../css/about.css";
import "../css/technologies.css";
import "../css/button.css";
import "../css/my-work.css";
import "../css/footer.css";
import ProfilePhoto from "../images/portfoliophoto-placeholder.jpg";

function HomePage() {
  return (
    <div>
      {/* Introduction section */}
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Jaron Bloom</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Software Developer
        </p>
        <img src={ProfilePhoto} alt="Jaron" className="intro__img" />
      </section>

      {/* My Technologies Section */}
      <section className="my-technologies" id="technology">
        <h1 className="section__title section__title--technology">
          Technologies I use
        </h1>
        {/* Below code is to ensure only certain objects get shown 
          on main page to not over crowd it more objects are displayed 
          on the Technologies page */}
        <div className="technologies">
          {Technologies.map((item) => {
            if (item.id < 3) {
              return (
                <div key={item.id} className="technology-item">
                  <img src={item.img} alt="" />
                  <p>{item.content}</p>
                </div>
              );
            }
            return true;
          })}
        </div>
        <Button href="/Technologies" className="btn">
          Other technologies I use
        </Button>
      </section>

      {/* About Me Section */}
      <section>
        <div className="about-me" id="about">
          <h2 className="section__title section__title--about">Who I am</h2>
          <p className="section__subtitle section__subtitle--about">
            Honours Bachelor of Technology (Software Development) Student
          </p>

          <div className="about-me__body">
            <AboutMe />
          </div>
          <img src={ProfilePhoto} alt="Jaron" className="about-me__img" />
        </div>
        <span className="about-me__btn">
          <Button href="/Aboutme" className="btn">
            A little more about me
          </Button>
        </span>
      </section>

      {/* My Work Section */}
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">
          Here are some of my projects
        </p>
        <div className="portfolio">
          <MyWorkComponent />
        </div>
        <Button variant="primary" href="/MyWork" className="btn">
          View additional projects
        </Button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
