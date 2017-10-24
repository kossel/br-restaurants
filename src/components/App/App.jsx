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
    <div className="main-layout">
      <Header />
      <div className="container-fluid main-content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
