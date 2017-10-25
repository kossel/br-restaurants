import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RestaurantItem from 'components/RestaurantItem';
import './styles.scss';

const propTypes = {
  restaurants: PropTypes.array,
  loading: PropTypes.bool,
  getRestaurantsList: PropTypes.func.isRequired,
  selectRestaurant: PropTypes.func.isRequired,
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
    const { restaurants, loading, selectRestaurant } = this.props;
    if (!loading) {
      return (
        <div className="restaurant-list__container">
          {
            restaurants.map(restaurant => (
              <RestaurantItem
                key={restaurant.name.trim()}
                name={restaurant.name}
                bgImage={restaurant.backgroundImageURL}
                category={restaurant.category}
                onSelect={selectRestaurant}
              />
              ),
            )
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
