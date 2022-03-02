import React from "react";
import "../css/about.css";

function AboutMePage() {
  return (
    <div className="about-me__page">
      <h1 className="about-me__title">Here is a little bit more about me</h1>
      <div className="about-me__description">
        <p>
          My name is Jaron Bloom, and I am currently a Computer Science student
          with an interest in technology and security.
        </p>
        <p>
          Being self-driven, has allowed me to learn technologies and
          programming languages which are either not taught in my classes or not
          in my program.
        </p>
        <p>
          The challenge of programming is why I enjoy it. There is a thrill when
          you get stuck on a problem that is not easy to figure out. Then the
          feeling of satisfaction when you are able to solve the problem is
          amazing.
        </p>
        <p>
          Its not just programming that I am interested in, it's many aspects of
          Computer Science. I enjoy tinkering and trying new things. This is
          probably why I enjoy using the technologies that I choose for day to
          day tasks, as a lot of custimization can be done. It's probably also
          why I enjoy flashing my old phone with different custom ROMs just to
          see how different they are and try them out.
        </p>
        <p>
          Also having an interest in security is another reason why I choose the
          tools that I do.
        </p>
      </div>
    </div>
  );
}

export default AboutMePage;
