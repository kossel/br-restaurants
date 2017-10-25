import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapMarker from 'components/MapMarker';

const propTypes = {
  restaurants: PropTypes.array,
};

const defaultProps = {
  restaurants: [],
};

class RestaurantsMap extends Component {
  constructor(props) {
    super(props);
    // hard coded to dallas, but could find the best center and
    // zoom level that fit all locations with map api
    this.state = {
      center: { lat: 32.9542923, lng: -96.8260353 },
      zoom: 15,
    };
  }

  render() {
    const { restaurants } = this.props;
    if (!restaurants || restaurants.length <= 0) {
      return <div>Loading ... </div>;
    }
    return (
      <GoogleMapReact
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
      >
        {restaurants.map(restaurant => (
          <MapMarker
            key={restaurant.name.trim()}
            lat={restaurant.location.lat}
            lng={restaurant.location.lng}
          />),
        )
        }
      </GoogleMapReact>
    );
  }
}

RestaurantsMap.propTypes = propTypes;
RestaurantsMap.defaultProps = defaultProps;

export default RestaurantsMap;
