import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavbarMain from './components/NavbarMain'
// import ProductForm from './containers/ProductForm'
import ProductRouter from './containers/ProductRouter'
import AdminForm from './containers/AdminForm'

// Set up Admin Form Components
// set pry in sessions_controller to see info


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavbarMain />
        <AdminForm />

        <Route component={ProductRouter} />
        
        {/* <ProductForm /> */}
      </div>
    );
  }
}

export default App;
