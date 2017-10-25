import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RestaurantsMap from 'components/RestaurantsMap';
import './styles.scss';

const propTypes = {
  restaurant: PropTypes.object,
  expanded: PropTypes.bool,
  toggleDetail: PropTypes.func,
};

const defaultProps = {
  restaurant: null,
  expanded: false,
};

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { restaurant, expanded, toggleDetail } = this.props;
    const containerClass = classnames('restaurant-detail__container', {
      expanded,
    });
    if (!restaurant) return <div className={containerClass} />;
    return (
      <div className={containerClass}>
        <div className="restaurant-detail__map-container">
          <RestaurantsMap
            restaurants={[restaurant]}
            zoom={17}
            defaultCenter={{ lat: restaurant.location.lat, lng: restaurant.location.lng }}
          />
        </div>
        <div className="restaurant-detail__name-container">
          <div className="restaurant-detail__name">{restaurant.name}</div>
          <div className="restaurant-detail__category">{restaurant.category}</div>
        </div>
        <div className="restaurant-detail__more-info">
          <p>{restaurant.location.formattedAddress}</p>
          <p>{restaurant.contact ? restaurant.contact.phone : ''}</p>
          <p>{restaurant.contact && restaurant.contact.twitter ? `@${restaurant.contact.twitter}` : ''}</p>
        </div>
        <div>
          <button className="btn btn-default" onClick={toggleDetail}>Back</button>
        </div>
      </div>
    );
  }
}

RestaurantDetail.propTypes = propTypes;
RestaurantDetail.defaultProps = defaultProps;

export default RestaurantDetail;
