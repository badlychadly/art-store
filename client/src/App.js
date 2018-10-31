import React, { Component } from 'react';
import './App.css';
import NavbarMain from './components/NavbarMain'
import ProductsContainer from './containers/ProductsContainer';
import ProductForm from './containers/ProductForm'


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavbarMain />
        <ProductForm />
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
