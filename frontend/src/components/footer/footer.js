import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
    render () {
        return (
          <footer className="footer-main">
            <div className="footer-copyright">
              Profferly &copy; 2020
            </div>

            <div className="footer-links">
              <ul>
                <li className="footer-link">
                    <a clasName="member-name" href="#">Catherine Kim</a>
                      <ul class="dropdown">
                        <li id="profile-photo">
                          <img src="/assets/images/cat.jpg" alt="catherine"/>
                        </li>
                          <li id="profile-position">Frontend Lead</li>
                          <li className="linkedin-button">
                            <a href="https://www.linkedin.com/in/catherinekimyj/" target="_blank">
                              Linkedin
                            </a>
                          </li>
                          <li className="angel-button">
                            <a href="https://angel.co/u/catherinekimyj" target="_blank">
                              Angellist
                            </a>
                          </li>
                          <li className="git-button">
                            <a href="https://github.com/catherinekimyj" target="_blank">
                              Github
                            </a>
                          </li>
                      </ul>
                </li>
                <li className="footer-link">
                  <a  clasName="member-name" href="#">Emina Ramovic</a>
                    <ul class="dropdown">
                    <li id="profile-photo">
                          <img src="/assets/images/emina.png" alt="catherine"/>
                        </li>
                          <li id="profile-position">Flex Lead</li>
                        <li className="linkedin-button"><a href="https://www.linkedin.com/in/marikasanuki" target="_blank">Linkedin</a></li>
                        <li className="angel-button"><a href="https://angel.co/emina-ramovic" target="_blank">Angellist</a></li>
                        <li className="git-button"><a href="https://github.com/Emina288" target="_blank">Github</a></li>
                    </ul>
                </li>
                <li className="footer-link">
                  <a  clasName="member-gloria" href="#">Gloria Kang</a>
                    <ul class="dropdown">
                    <li id="profile-photo">
                          <img src="/assets/images/gloria-gradient.png" alt="catherine"/>
                        </li>
                          <li id="profile-position">Team Lead</li>
                          <li className="linkedin-button"><a href="https://www.linkedin.com/in/glhkang" target="_blank">Linkedin</a></li>
                          <li className="angel-button"><a href="https://angel.co/glhkang" target="_blank">Angellist</a></li>
                          <li className="git-button"><a href="https://github.com/glhkang" target="_blank">Github</a></li>
                    </ul>
                </li>
                <li className="footer-link">
                  <a  clasName="member-name" href="#">Mari Kasanuki</a>
                    <ul class="dropdown">
                    <li id="profile-photo">
                          <img src="/assets/images/mari.png" alt="catherine"/>
                        </li>
                          <li id="profile-position">Backend Lead</li>
                          <li className="linkedin-button"><a href="https://www.linkedin.com/in/marikasanuki" target="_blank">Linkedin</a></li>
                          <li className="angel-button"><a href="https://angel.co/marikasanuki" target="_blank">Angellist</a></li>
                          <li className="git-button"><a href="https://github.com/marikasanuki" target="_blank">Github</a></li>
                    </ul>
                </li>
              </ul>
            </div>
          </footer>
        );
    }
}

export default Footer;