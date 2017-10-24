import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Footer';
import './styles.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function MainLayout(props) {
  return (
    <div className="main-layout">
      <div className="main-layout__content">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = propTypes;
export default MainLayout;
