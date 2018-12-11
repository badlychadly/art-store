import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { getProducts, deleteProduct } from '../actions/products'
import { logOutUser, resetMessage } from '../actions/session'
import ListProducts from '../components/ListProducts'
import ProductShow from '../components/ProductShow'
import ProductShw from '../components/ProductShw'
import AdminForm from './AdminForm'
import ProductForm from './ProductForm'
import NavbarMain from '../components/NavbarMain'
import { PrivateRoute, AdminLoginRoute } from '../components/CustomRoutes'


import '../Products.css'




class ProductRouter extends Component {



    componentDidMount() {
        // debugger;
        !!this.props.products.length || this.props.getProducts()
    }
       


    render() {
        return (
            <div>
            <NavbarMain logOutUser={this.props.logOutUser} logged_in={this.props.logged_in} />
            
                
                {/* <Route exact path="/admin/login" render={routerProps => this.props.logged_in ? (<Redirect to="/"/> ) : (<AdminForm logged_in={this.props.logged_in} {...routerProps} />)} />   */}

                <AdminLoginRoute path="/admin/login" logged_in={this.props.logged_in} component={AdminForm} /> 


                <Switch>
                    <PrivateRoute path="/products/new" newProduct={this.props.newProduct} logged_in={this.props.logged_in} component={ProductForm} />
                    <Route path={`/products/:productId`} render={routerProps => (<ProductShow products={this.props.products} deleteProduct={this.props.deleteProduct} logged_in={this.props.logged_in} location={routerProps.location} {...routerProps} />)} />
                    <Route path="/" render={routerProps => <ListProducts resetMessage={this.props.resetMessage} sendMessage={this.props.sendMessage} products={this.props.products} {...routerProps} />} />

                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        products: state.products.products,
        newProduct: state.products.newProduct,
        logged_in: state.session.hasToken,
        sendMessage: state.session.sendMessage
    })
}

export default connect(mapStateToProps, { getProducts, deleteProduct, logOutUser, resetMessage })(ProductRouter);