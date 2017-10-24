import React from 'react';
import RestaurantList from 'containers/RestaurantsList';
import RestaurantDetail from 'components/RestaurantDetail';
import './styles.scss';

function Home() {
  return (
    <div className="row no-gutters home__row-content">
      <div className="col-md-4 home__list-container">
        <RestaurantList />
      </div>
      <div className="col-md-8 d-none d-sm-block" >
        <RestaurantDetail />
      </div>
    </div>
  );
}

export default Home;
