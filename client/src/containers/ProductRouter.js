import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { getProducts, deleteProduct } from '../actions/products'
import { logOutUser } from '../actions/session'
import ProductsContainer from './ProductsContainer'
import ProductShow from '../components/ProductShow'
import AdminForm from './AdminForm'

import '../Products.css'




class ProductRouter extends Component {


    componentDidMount() {
        this.props.getProducts()
    }

    logOut = event => {
        event.preventDefault();
        this.props.logOutUser();
      }
       


    render() {
        // console.log(this.props)
        return (
            <div>
                <div><button onClick={this.logOut}>log out</button></div>
                <Route exact path="/admin/login" render={routerProps => <AdminForm {...routerProps} />} />            
                
                <Route path="/" render={routerProps => <ProductsContainer products={this.props.products} {...routerProps} />} />
                <Route exact path={`/products/:productId`} render={routerProps => (<ProductShow products={this.props.products} deleteProduct={this.props.deleteProduct} logged_in={this.props.logged_in} location={routerProps.location} {...routerProps} />)} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        products: state.products,
        logged_in: state.session
    })
}

export default connect(mapStateToProps, { getProducts, deleteProduct, logOutUser })(ProductRouter);