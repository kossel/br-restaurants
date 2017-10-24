import React, { PureComponent } from 'react';
import {
  Link
} from 'react-router-dom';
import './styles.scss';

class Header extends PureComponent {
  render(){
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          LOGO
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/">Home</Link>
            </div>
            <div className="navbar-item">
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
