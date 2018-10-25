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
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;
