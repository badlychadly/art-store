import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavbarMain from './components/NavbarMain'
import ProductForm from './containers/ProductForm'
import ProductShow from './components/ProductShow'
import ProductRouter from './containers/ProductRouter'


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavbarMain />
        {/* <Route exact path="/" component={ProductsContainer} />
        <Route path={`/products/:productId`} component={ProductShow} /> */}
        <ProductRouter />
        
        {/* <ProductForm /> */}
      </div>
    );
  }
}

export default App;
