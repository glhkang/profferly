import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-main">
        <div className="footer-copyright">Profferly &copy; 2020</div>

        <div className="footer-links">
          <ul>
            <li className="footer-link">
              <a className="member-name" 
                href="https://www.linkedin.com/in/catherinekimyj/"
                target="_blank"
                rel="noopener noreferrer">
                Catherine Kim
              </a>
              <ul class="dropdown">
                <li id="profile-photo">
                  <img src="/assets/images/cat.jpg" alt="catherine" />
                </li>
                <li id="profile-position">Frontend Lead</li>
                <li className="linkedin-button">
                  <a
                    href="https://www.linkedin.com/in/catherinekimyj/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="angel-button">
                  <a href="https://angel.co/u/catherinekimyj" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    Angellist
                  </a>
                </li>
                <li className="git-button">
                  <a href="https://github.com/catherinekimyj" 
                    target="_blank"
                    rel="noopener noreferrer">
                    Github
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-link">
              <a className="member-name"
                href="https://www.linkedin.com/in/emina-ramovic-858835187/"
                target="_blank"
                rel="noopener noreferrer">
                Emina Ramovic
              </a>
              <ul class="dropdown">
                <li id="profile-photo">
                  <img src="/assets/images/emina.png" alt="emina" />
                </li>
                <li id="profile-position">Flex Lead</li>
                <li className="linkedin-button">
                  <a
                    href="https://www.linkedin.com/in/emina-ramovic-858835187/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="angel-button">
                  <a href="https://angel.co/emina-ramovic"
                    target="_blank"
                    rel="noopener noreferrer">
                    Angellist
                  </a>
                </li>
                <li className="git-button">
                  <a href="https://github.com/Emina288" 
                    target="_blank"
                    rel="noopener noreferrer">
                    Github
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-link">
              <a className="member-gloria"
                href="https://www.linkedin.com/in/glhkang"
                target="_blank"
                rel="noopener noreferrer">
                Gloria Kang
              </a>
              <ul class="dropdown">
                <li id="profile-photo">
                  <img
                    src="/assets/images/gloria-gradient.png"
                    alt="gloria"
                  />
                </li>
                <li id="profile-position">Team Lead</li>
                <li className="linkedin-button">
                  <a href="https://www.linkedin.com/in/glhkang" 
                    target="_blank"
                    rel="noopener noreferrer">
                    Linkedin
                  </a>
                </li>
                <li className="angel-button">
                  <a href="https://angel.co/glhkang" 
                    target="_blank"
                    rel="noopener noreferrer">
                    Angellist
                  </a>
                </li>
                <li className="git-button">
                  <a href="https://github.com/glhkang" 
                    target="_blank"
                    rel="noopener noreferrer">
                    Github
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-link">
              <a className="member-name"
                href="https://www.linkedin.com/in/marikasanuki"
                target="_blank"
                rel="noopener noreferrer">
                Mari Kasanuki
              </a>
              <ul class="dropdown">
                <li id="profile-photo">
                  <img src="/assets/images/mari.png" alt="mari" />
                </li>
                <li id="profile-position">Backend Lead</li>
                <li className="linkedin-button">
                  <a
                    href="https://www.linkedin.com/in/marikasanuki"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="angel-button">
                  <a href="https://angel.co/marikasanuki" 
                    target="_blank"
                    rel="noopener noreferrer">
                    Angellist
                  </a>
                </li>
                <li className="git-button">
                  <a href="https://github.com/marikasanuki" 
                    target="_blank"
                    rel="noopener noreferrer">
                    Github
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
