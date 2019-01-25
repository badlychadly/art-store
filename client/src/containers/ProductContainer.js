import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { getProducts, deleteProduct, resetNewProduct } from '../actions/products'
import { logOutUser, resetMessage, verifyAdmin } from '../actions/session'
import { getInfo } from '../actions/aboutInfo'
import ListProducts from '../components/ListProducts'
import ProductShow from '../components/ProductShow'
import AdminForm from './AdminForm'
import ProductForm from './ProductForm'
import NavbarMain from '../components/NavbarMain'
import AboutPage from '../components/AboutPage'
import Messages from '../components/messages/Messages'
import Loader from 'react-loader-spinner'
import { PrivateRoute, AdminLoginRoute, ShowProductRoute } from '../components/CustomRoutes'

import '../Products.css'


class ProductContainer extends Component {



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
            
            
                

                <AdminLoginRoute path="/admin/login" logged_in={this.props.logged_in} component={AdminForm} /> 


                <Switch>
                    <PrivateRoute path="/products/new" newProduct={this.props.newProduct} isValidated={this.props.isValidated} logged_in={this.props.logged_in} component={ProductForm} />


                    <ShowProductRoute path={`/products/:productId`} component={ProductShow} products={this.props.products} newProduct={this.props.newProduct} resetNewProduct={this.props.resetNewProduct} deleteProduct={this.props.deleteProduct} logged_in={this.props.logged_in} isValidated={this.props.isValidated} />

                    <Route path="/about" render={routerProps => <AboutPage about={this.props.about} getInfo={this.props.getInfo} {...routerProps} />} />

                    <Route path="/" render={routerProps => <ListProducts resetMessage={this.props.resetMessage} sendMessage={this.props.sendMessage} products={this.props.products} {...routerProps} />} />

                </Switch>
            </div>
        ) : (
        <div style={{marginTop: '45vh' }}>
            <Loader type="Oval" color="#ffffff" height="100" width="100"/>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        products: state.products.products,
        newProduct: state.products.newProduct,
        logged_in: state.session.hasToken,
        isValidated: state.session.isValidated,
        sendMessage: state.session.sendMessage,
        about: state.aboutInfo.about
    })
}

export default connect(mapStateToProps, { getProducts, deleteProduct, logOutUser, resetMessage, resetNewProduct, verifyAdmin, getInfo })(ProductContainer);