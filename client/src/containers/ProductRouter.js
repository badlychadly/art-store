import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { getProducts, deleteProduct } from '../actions/products'
import ProductsContainer from './ProductsContainer'
import ProductShow from '../components/ProductShow'
import '../Products.css'




class ProductRouter extends Component {


    componentDidMount() {
        this.props.getProducts()
    }
       


    render() {
        // console.log(this.props)
        return (
            <div>
                <Route exact path="/" render={routerProps => <ProductsContainer products={this.props.products} {...routerProps} />} />
                <Route path={`/products/:productId`} render={routerProps => (<ProductShow products={this.props.products} deleteProduct={this.props.deleteProduct} location={routerProps.location} {...routerProps} />)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        products: state.products
    })
}

export default connect(mapStateToProps, { getProducts, deleteProduct })(ProductRouter);