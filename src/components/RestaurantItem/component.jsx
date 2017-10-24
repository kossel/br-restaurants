import React from 'react';
import PropTypes from 'prop-types';
import cellGradientImg from 'assets/images/cellGradientBackground@2x.png';
import './style.scss';

const propTypes = {
  bgImage: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
};

const defaultProps = {
  bgImage: '',
  name: '',
  category: '',
};

function RestaurantItem({ bgImage, name, category }) {
  const backgroundImage = { backgroundImage: `url(${bgImage})` };
  const cellGradient = { backgroundImage: `url(${cellGradientImg})` };
  return (
    <div className="restaurant-item__container" style={backgroundImage}>
      <div className="restaurant-item__labels">
        <div className="restaurant-item__name">{name}</div>
        <span className="restaurant-item__category">{category}</span>
      </div>
      <div className="restaurant-item__cell-gradient" style={cellGradient} />
    </div>
  );
}

RestaurantItem.propTypes = propTypes;
RestaurantItem.defaultProps = defaultProps;
export default RestaurantItem;
