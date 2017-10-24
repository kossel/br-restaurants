import React from 'react';
import RestaurantList from 'containers/RestaurantsList';
import RestaurantDetail from 'components/RestaurantDetail';
import MainLayout from 'layouts/MainLayout';

function Home() {
  return (
    <MainLayout>
      <div className="row">
        <div className="col-md-6">
          <RestaurantList />
        </div>
        <div className="col-md-6">
          <RestaurantDetail />
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
