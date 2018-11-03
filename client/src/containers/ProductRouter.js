import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { getProducts } from '../actions/products'
import ProductsContainer from './ProductsContainer'
import ProductShow from '../components/ProductShow'
import '../Products.css'


function ProductRouter(props) {
    console.log(props)
    return (
        <div>
            <Route exact path="/" render={routerProps => <ProductsContainer getProducts={props.getProducts} products={props.products} {...routerProps} />} />
            <Route exact path={`/products/:productId`} render={routerProps => (<ProductShow products={props.products} location={routerProps.location} {...routerProps} />)} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        products: state.products
    })
}

export default connect(mapStateToProps, { getProducts })(ProductRouter);