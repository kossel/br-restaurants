import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  restaurants: PropTypes.array,
  loading: PropTypes.bool,
  getRestaurantsList: PropTypes.func.isRequired,
};

const defaultProps = {
  restaurants: [],
  loading: false,
};

class RestaurantList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRestaurantsList();
  }

  render() {
    const { restaurants, loading } = this.props;
    if (!loading) {
      return (
        <div>
          {
            restaurants.map(restaurant => <div>{restaurant.name}</div>)
          }
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

RestaurantList.propTypes = propTypes;
RestaurantList.defaultProps = defaultProps;

export default RestaurantList;
