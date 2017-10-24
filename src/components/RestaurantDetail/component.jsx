import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  twitter: PropTypes.string,
};

const defaultProps = {
  lat: 0,
  lng: 0,
  name: '',
  category: '',
  address: '',
  phone: '',
  twitter: '',
};

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lat, lng, name, category, address, phone, twitter } = this.props;
    return (
      <div className="restaurant-detail__container">
        <div>{lat}</div>
        <div>{lng}</div>
        <div>{name}</div>
        <div>{category}</div>
        <div>{address}</div>
        <div>{phone}</div>
        <div>@{twitter}</div>
      </div>
    );
  }
}

RestaurantDetail.propTypes = propTypes;
RestaurantDetail.defaultProps = defaultProps;

export default RestaurantDetail;
