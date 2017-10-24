import 'whatwg-fetch';
import mockRestaurants from './mockRestaurants.json';

// function getRestaurants() {
//   return fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json')
//     .then(response => response.json())
//     .then(json => Promise.resolve(json))
//     .catch(err => Promise.reject(err));
// }

function getRestaurants() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRestaurants.restaurants), 1500);
  });
}

export {
  getRestaurants, // eslint-disable-line
};
