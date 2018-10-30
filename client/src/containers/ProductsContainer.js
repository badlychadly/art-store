import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getProducts } from '../actions/products'
import ProductCard from '../components/ProductCard'
import '../Products.css'


class ProductsContainer extends Component {
    

      componentDidMount() {
       this.props.getProducts()
      }

    render() {
        return (
            <div className="ProductsContainer">
                {this.props.products.map(product => <ProductCard key={product.id} product={product} />)}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        products: state.products
    })
}

export default connect(mapStateToProps, { getProducts })(ProductsContainer);