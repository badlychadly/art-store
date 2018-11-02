import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { getProducts } from '../actions/products'
import ProductsContainer from './ProductsContainer'
import ProductShow from '../components/ProductShow'
import '../Products.css'


function ProductRouter(props) {
    return (
        <div>
            {console.log(props)}
            <Route exact path="/" render={routerProps => <ProductsContainer getProducts={props.getProducts} products={props.products} {...routerProps} />} />
            <Route path={`/products/:productId`} component={ProductShow} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        products: state.products
    })
}

export default connect(mapStateToProps, { getProducts })(ProductRouter);