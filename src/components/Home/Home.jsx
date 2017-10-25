import React from 'react';
import RestaurantList from 'containers/RestaurantsList';
import RestaurantDetail from 'containers/RestaurantDetail';
import RestaurantsMap from 'containers/RestaurantsMap';
import './styles.scss';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      detailExpanded: false,
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded(e, flag) {
    let nextState = !this.state.detailExpanded;
    if (flag !== undefined && flag !== null) {
      nextState = flag;
    }
    this.setState({
      detailExpanded: nextState,
    });
  }

  render(){
    return (
      <div className="row no-gutters home__row-content">
        <div className="col-md-4 home__list-container">
          <RestaurantList toggleExpanded={this.toggleExpanded} />
        </div>
        <div className="col-md-8">
          <RestaurantsMap className="d-none d-sm-block" />
          <RestaurantDetail
            expanded={this.state.detailExpanded}
            toggleDetail={this.toggleExpanded}
          />
        </div>
      </div>
    );
  }

}

export default Home;
