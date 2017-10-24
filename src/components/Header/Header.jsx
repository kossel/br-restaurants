import React, { PureComponent } from 'react';
import {
  Link,
} from 'react-router-dom';
import './styles.scss';

class Header extends PureComponent {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md fixed-top">
          <Link to="/" className="navbar-brand">Lunch Tyme</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
