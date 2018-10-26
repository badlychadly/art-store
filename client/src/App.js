import React, { Component } from 'react';
import './App.css';
import ProductsContainer from './containers/ProductsContainer';


class App extends Component {

  render() {
    return (
      <div className="App">
      <ProductsContainer />
      </div>
    );
  }
}

export default App;
