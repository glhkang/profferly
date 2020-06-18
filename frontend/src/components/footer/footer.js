import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render () {
        return (
          <footer className="footer-main">
            <div className="footer-copyright">
              Copyright &copy; 2020 Profferly
            </div>

            <div className="footer-links">
              <ul>
                <li className="footer-link">
                  <a href="https://github.com/glhkang/profferly">
                    Catherine Kim
                  </a>
                </li>
                <li className="footer-link">
                  <a href="https://github.com/glhkang/profferly">Emina Ramovic</a>
                </li>
                <li className="footer-link">
                  <a href="https://github.com/glhkang/profferly">Gloria Kang</a>
                </li>
                <li className="footer-link">
                  <a href="https://github.com/glhkang/profferly">Mari Kasanuki</a>
                </li>
              </ul>
            </div>
          </footer>
        );
    }
}

export default Footer;