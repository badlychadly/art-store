import React, { Component } from 'react';
import './App.css';
import ProductsContainer from './containers/ProductsContainer';
import ProductForm from './containers/ProductForm'


class App extends Component {

  render() {
    return (
      <div className="App">
        <ProductForm />
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
