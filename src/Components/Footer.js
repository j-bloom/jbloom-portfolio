import React from "react";

function Footer() {
  return (
    <footer>
      <a href="mailto:j-bloom7@protonmail.com" className="footer-link">
        j-bloom7@protonmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/jaron-bloom/"
          >
            Linkedin
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/j-bloom"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
