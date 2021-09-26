import React, { Fragment } from 'react';
import '../src/css/App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import products from './Components/Pages/products';
import services from './Components/Pages/services';
import signup from './Components/Pages/signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/services" exact component={services} />
          <Route path="/products" exact component={products} />
          <Route path="/signup" exact component={signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
