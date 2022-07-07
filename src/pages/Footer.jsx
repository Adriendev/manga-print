import React from "react";
import "./Footer.css";
import githubLogo from "../assets/images/25231.png";

const Footer = () => {
  return (
    <footer>
      <section id="links">
        <div className="git">
          <p>{"Check out our Github repo =>"}</p>
          <a href="https://github.com/Adriendev/manga-print">
            <img src={githubLogo} className="github-logo" />
          </a>
        </div>
        <div className="about">
          <ul>
            <label>Find more about us:</label>
            <li>
              <a href="https://github.com/begoczb">Begonia Calzado</a>
            </li>
            <li>
              <a href="https://github.com/Adriendev">Adrien Deveaux</a>
            </li>
            <li>
              <a href="https://github.com/Val-be">Valérian Belin</a>
            </li>
          </ul>
        </div>
      </section>
      <div className="copyright">
        <p>© Begonia Calzado, Adrien Deveaux and Valérian Belin 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
