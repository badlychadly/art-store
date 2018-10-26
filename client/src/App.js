import React, { Component } from 'react';
import './App.css';


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
      <div>
        {this.state.products.map(product => <img key={product.id} src={product.img_url} alt={product.name}/>)}
      </div>
    );
  }
}

export default App;
