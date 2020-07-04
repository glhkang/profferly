import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render () {
        return (
          <footer className="footer-main">
            <div className="footer-copyright">
              profferly &copy; 2020
            </div>

            <div className="footer-links">
              <ul>
                <li className="footer-link">
                  <a href="https://www.linkedin.com/in/catherine-kim-a9a26676/">
                    Catherine Kim
                  </a>
                </li>
                <li className="footer-link">
                  <a href="https://www.linkedin.com/in/emina-ramovic-858835187/">Emina Ramovic</a>
                </li>
                <li className="footer-link">
                  <a href="https://www.linkedin.com/in/glhkang/">Gloria Kang</a>
                </li>
                <li className="footer-link">
                  <a href="https://www.linkedin.com/in/marikasanuki/">Mari Kasanuki</a>
                </li>
              </ul>
            </div>
          </footer>
        );
    }
}

export default Footer;