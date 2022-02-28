import React from "react";
import "../css/footer.css"

function Footer() {
  return (
    <footer>
      <a href="mailto:j-bloom7@protonmail.com" className="footer__link">
        j-bloom7@protonmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/jaron-bloom/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/j-bloom"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
