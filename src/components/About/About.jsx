import React from 'react';
import { getRestaurants } from 'services/restaurants';

class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }
  componentDidMount() {
    getRestaurants().then(res => {console.log(res)})
  }
  render() {
    return (
      <div>
        <h3> Hello about!</h3>
      </div>
    );
  }
}

export default About;
