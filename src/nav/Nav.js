import React from 'react';
import NavButton from './NavButton.js';
import {Link} from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
        <div className="nav_container">
          <NavButton/>
          <div className="nav">
              <ul className="nav_list">
                  <li className="active"><Link to='/'>Home</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li>
                    <div className="sublist">
                        <Link to='/about'>About</Link>
                        <div className="sublist_content">
                            <ul id="about_list">
                                <li><Link to="/about">Me</Link></li>
                                <li><Link to="/the-site">The Site</Link></li>
                            </ul>
                        </div>
                    </div>
                  </li>
                  <li>
                    <div className="sublist">
                      My Work
                      <div className="sublist_content">
                          <ul id="work_list">
                              <li> <a href="http://web.eecs.utk.edu/~jmasse10/9n2Bj1p4/finalp/" target="_blank"> WebGL Beach </a> </li>
                              <li> <a href="https://github.com/jalomas7" target="_blank"> GitHub Repos </a> </li>
                              <li> <a href="http://web.eecs.utk.edu/~jmasse10/" target="_blank"> UTK EECS Site</a> </li>
                          </ul>
                      </div>
                    </div>
                  </li>
              </ul>
          </div>
        </div>
      )
    }
}

export default Nav;
