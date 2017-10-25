import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  restaurant: PropTypes.object,
};

const defaultProps = {
  restaurant: null,
};

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { restaurant } = this.props;
    if (!restaurant) return null;
    return (
      <div className="restaurant-detail__container">
        <div>{restaurant.location.lat}</div>
        <div>{restaurant.location.lng}</div>
        <div>{restaurant.name}</div>
        <div>{restaurant.category}</div>
        <div>{restaurant.location.formattedAddress}</div>
        <div>{restaurant.contact ? restaurant.contact.phone : ''}</div>
        <div>{restaurant.contact && restaurant.contact.twitter ? `@${restaurant.contact.twitter}` : ''}</div>
      </div>
    );
  }
}

RestaurantDetail.propTypes = propTypes;
RestaurantDetail.defaultProps = defaultProps;

export default RestaurantDetail;
