import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ProductContainer from './containers/ProductContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route component={ProductContainer} />
      </div>
    );
  }
}

export default App;
