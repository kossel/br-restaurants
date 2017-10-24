import React from 'react';
import {
  Route,
} from 'react-router-dom';
import Header from 'components/Header';
import Home from 'components/Home';
import About from 'components/About';
import Footer from 'components/Footer';
import 'assets/styles.scss';


function App() {
  return (
    <div id="main">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Footer />
    </div>
  );
}

export default App;
