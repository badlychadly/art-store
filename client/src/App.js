import React, { Component } from 'react';
import './App.css';
import ProductCard from './components/ProductCard'
import './Products.css'


class App extends Component {
  state = {
    products: []
  }
 

  componentDidMount() {
    fetch("http://10.0.0.99:3001/products")
    .then(resp => resp.json())
    .then(products => this.setState({ products }))
  }


  render() {
    return (
      <div className="App">
        {this.state.products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    );
  }
}

export default App;
