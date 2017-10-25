import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RestaurantItem from 'components/RestaurantItem';
import './styles.scss';

const propTypes = {
  restaurants: PropTypes.array,
  loading: PropTypes.bool,
  getRestaurantsList: PropTypes.func.isRequired,
  selectRestaurant: PropTypes.func.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
  mouseOutRestaurant: PropTypes.func,
  mouseInRestaurant: PropTypes.func,
};

const defaultProps = {
  restaurants: [],
  loading: false,
};

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.handleItemOnClick = this.handleItemOnClick.bind(this);
  }

  componentDidMount() {
    this.props.getRestaurantsList();
  }

  handleItemOnClick(res){
    this.props.selectRestaurant(res);
    this.props.toggleExpanded(null, true);
  }

  render() {
    const { restaurants, loading, mouseOutRestaurant, mouseInRestaurant } = this.props;
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
                onSelect={this.handleItemOnClick}
                mouseInRestaurant={mouseInRestaurant}
                onMouseLeave={mouseOutRestaurant}
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
