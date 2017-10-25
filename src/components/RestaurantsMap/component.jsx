import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapMarker from 'components/MapMarker';

const propTypes = {
  restaurants: PropTypes.array,
  defaultCenter: PropTypes.object,
  zoom: PropTypes.number,
};

const defaultProps = {
  restaurants: [],
  defaultCenter: { lat: 32.9542923, lng: -96.8260353 },
  zoom: 15,
};

const gmapStyle = [
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#C5E3BF',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        lightness: 100,
      },
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#58af67',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#C6E2FF',
      },
    ],
  },
];

function createMapOptions() {
  return {
    styles: gmapStyle,
  };
}

class RestaurantsMap extends Component {
  constructor(props) {
    super(props);
    // hard coded to dallas, but could find the best center and
    // zoom level that fit all locations with map api
    this.state = {
    };
  }

  render() {
    const { restaurants, defaultCenter, zoom } = this.props;
    if (!restaurants || restaurants.length <= 0) {
      return <div>Loading ... </div>;
    }
    console.log('new center ', defaultCenter);
    return (
      <GoogleMapReact
        center={defaultCenter}
        zoom={zoom}
        options={createMapOptions}
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
