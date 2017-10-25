import React from 'react';
import lunchIcon from 'assets/images/tab_lunch@2x.png';
import internetsIcon from 'assets/images/tab_internets@2x.png';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer d-block d-sm-none">
      <div className="d-flex justify-content-around">
        <a href="">
          <img src={lunchIcon} alt="lunch" />
          <span>Lunch</span>
        </a>
        <a href="" className="disabled">
          <img src={internetsIcon} alt="Internet" />
          <span>Internet</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
