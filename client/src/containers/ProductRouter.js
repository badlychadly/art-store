import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { getProducts, deleteProduct, resetNewProduct } from '../actions/products'
import { logOutUser, resetMessage, verifyAdmin } from '../actions/session'
import ListProducts from '../components/ListProducts'
import ProductShow from '../components/ProductShow'
import AdminForm from './AdminForm'
import ProductForm from './ProductForm'
import NavbarMain from '../components/NavbarMain'
import AboutPage from '../components/AboutPage'
import Messages from '../components/messages/Messages'
import { PrivateRoute, AdminLoginRoute, ShowProductRoute } from '../components/CustomRoutes'


import '../Products.css'




class ProductRouter extends Component {



    componentDidMount() {
        if (this.props.logged_in && !this.props.products.length ) {
            return this.props.verifyAdmin().then(this.props.getProducts)
        } else {
            return this.props.getProducts()
        }
    }

    renderMessages = () => {
        if ((!!this.props.location.state) || this.props.sendMessage) {
           return <Messages confirmDelete={(!!this.props.location.state && this.props.location.state.confirmDelete)} sendError={(!!this.props.location.state && this.props.location.state.error)} history={this.props.history} resetMessage={this.props.resetMessage} sendMessage={this.props.sendMessage} location={this.props.location} />
        }
    }


       


    render() {
        return this.props.products.length ? (
            <div>
            <NavbarMain logOutUser={this.props.logOutUser} logged_in={this.props.logged_in} />
            {this.renderMessages()}
            
            
                
                {/* <Route exact path="/admin/login" render={routerProps => this.props.logged_in ? (<Redirect to="/"/> ) : (<AdminForm logged_in={this.props.logged_in} {...routerProps} />)} />   */}

                <AdminLoginRoute path="/admin/login" logged_in={this.props.logged_in} component={AdminForm} /> 


                <Switch>
                    <PrivateRoute path="/products/new" newProduct={this.props.newProduct} isValidated={this.props.isValidated} logged_in={this.props.logged_in} component={ProductForm} />

                    {/* <Route path={`/products/:productId`} render={routerProps => (<ProductShow products={this.props.products} newProduct={this.props.newProduct} resetNewProduct={this.props.resetNewProduct} deleteProduct={this.props.deleteProduct} logged_in={this.props.logged_in} isValidated={this.props.isValidated} {...routerProps} />)} /> */}

                    <ShowProductRoute path={`/products/:productId`} component={ProductShow} products={this.props.products} newProduct={this.props.newProduct} resetNewProduct={this.props.resetNewProduct} deleteProduct={this.props.deleteProduct} logged_in={this.props.logged_in} isValidated={this.props.isValidated} />

                    <Route path="/about" component={AboutPage} />

                    <Route path="/" render={routerProps => <ListProducts resetMessage={this.props.resetMessage} sendMessage={this.props.sendMessage} products={this.props.products} {...routerProps} />} />

                </Switch>
            </div>
        ) : <h3 className="text-white">Loading content...</h3>
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    return ({
        products: state.products.products,
        newProduct: state.products.newProduct,
        logged_in: state.session.hasToken,
        isValidated: state.session.isValidated,
        sendMessage: state.session.sendMessage
    })
}

export default connect(mapStateToProps, { getProducts, deleteProduct, logOutUser, resetMessage, resetNewProduct, verifyAdmin })(ProductRouter);