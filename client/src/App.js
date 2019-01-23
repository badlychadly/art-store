import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ProductRouter from './containers/ProductRouter'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route component={ProductRouter} />
      </div>
    );
  }
}

export default App;
