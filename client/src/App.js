import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavbarMain from './components/NavbarMain'
// import ProductForm from './containers/ProductForm'
import ProductRouter from './containers/ProductRouter'


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavbarMain />

        <Route component={ProductRouter} />
        
        {/* <ProductForm /> */}
      </div>
    );
  }
}

export default App;
