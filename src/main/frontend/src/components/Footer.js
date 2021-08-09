import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="upper__section">
        <div className="footer__leftSection">
          <h3>Connect here</h3>
          <a
            href="https://www.linkedin.com/in/akgarg0472/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            &nbsp; <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/akgarg0472"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            &nbsp; <span>GitHub</span>
          </a>

          <a
            href="https://hackerrank.com/akgarg0472"
            target="_blank"
            rel="noreferrer"
          >
            <CodeIcon />
            &nbsp; <span>HackerRank</span>
          </a>

          <a
            href="https://akgarg0472.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            <AccountCircleIcon />
            &nbsp; <span>Portfolio</span>
          </a>

          <a
            href="https://instagram.com/akhil.4776"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
            &nbsp; <span>Instagram</span>
          </a>
        </div>

        <div className="footer__middleSection">
          <h3>Get to Know Us</h3>
          <span>About us</span>
          <span>Career</span>
          <span>Press Releases</span>
          <span>Amazon Cares</span>
          <span>T&C</span>
        </div>

        <div className="footer__rightSection">
          <h3>Tools & Tech</h3>
          <span>ReactJS</span>
          <span>Firebase</span>
          <span>Spring Boot</span>
          <span>VS Code</span>
          <span>IntelliJ Idea</span>
        </div>
      </div>

      <div className="lower__section">© Akhilesh Garg ft. Amazon Clone</div>
    </div>
  );
}

export default Footer;
