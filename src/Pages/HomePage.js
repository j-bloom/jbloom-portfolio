import React from "react";
import AboutMe from "../Components/AboutMeComponent";

import ProfilePhoto from "../images/portfoliophoto-placeholder.jpg";

function HomePage() {
  return (
    <div>
      {/* Introduction section */}
      <h1>This is the Home Page!</h1>
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Jaron Bloom</strong>
        </h1>
        <p className="section__subtitle secttion__subtitle--intro">
          Software Developer
        </p>
        <img
          src={ProfilePhoto}
          alt="a picture of Jaron"
          style={{ height: "100px" }}
        />
      </section>

      {/* My Technologies Section */}
      <section className="my-technologies" id="technology">
        <h1 className="section__title section__title--technology">Daily Technologies used</h1>
        <div className="technology-item">
            <img src="https://netivist.org/uploads/forum/discussions/pictures/55d9a37555f4f719785e3468/windows-10-download-xl.jpg" />
            <p>I use Windows for school and when I need to</p>
          </div>
          <div className="technology-item">
            <img src="https://distroratings.github.io/images/qubes_os.png" />
            <p>I use Qubes for all personal use</p>
          </div>
        
      </section>

      {/* About Me Section */}
      <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about"></p>

        <div className="about-me__body">
          <AboutMe />
        </div>
        <img
          src={ProfilePhoto}
          alt="a picture of Jaron"
          style={{ height: "100px" }}
        />
      </section>

      {/* My Work Section */}
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle ">Here are some of my works</p>

        <div className="portfolio">
          <a href="#" className="portfolio__item">
            <img src={ProfilePhoto} alt="" className="portfolio__img" />
          </a>
        </div>
      </section>

      <footer>
        <a href="mailto:j-bloom7@protonmail.com" className="footer-link">
          j-bloom7@protonmail.com
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="https://www.linkedin.com">
              Linkedin
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default HomePage;
