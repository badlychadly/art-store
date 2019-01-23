import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { Button, Row, Col, Container  } from 'reactstrap';
import ProductCard from './ProductCard'
import ImageControl from './ImageControl'
import AuthButtons from './AuthButtons'

import ProductForm from '../containers/ProductForm'
import InfoTabs from './InfoTabs'
// import { PrivateRoute, AdminLoginRoute } from './CustomRoutes'


class ProductShow extends Component {
    
    

    componentDidMount() {
        !!this.props.newProduct.id && this.props.resetNewProduct() 
    }



    
    
        render() {
            this.product = this.props.product
            return (
            <div>
                <Container>
                    <h3 className="text-white">{this.product.name}</h3>
                    <AuthButtons isValidated={this.props.isValidated} deleteProduct={this.props.deleteProduct} product={this.product} />
                    <Row className="mx-0">
                        <Col sm="8">
                            <ImageControl picture={this.product.picture}>
                                <ProductCard product={this.product}/>
                            </ImageControl>
                        </Col>
                        <Col sm="4">
                            <InfoTabs product={this.product} logged_in={this.props.logged_in} deleteProduct={this.props.deleteProduct} />

                            {/* <PrivateRoute path="/products/new" product={this.product} logged_in={this.props.logged_in} component={ProductForm} /> */}
                                
                            <Route path={`/products/:productId/edit`} render={routerProps => this.props.logged_in ? <ProductForm product={this.product} {...routerProps}/>: <Redirect to={`/products/${this.product.id}`} />} />
                        </Col>
                    </Row>
                    {/* <Route path={`/products/:productId`} render={routerProps => (<ProductShow products={this.props.products} newProduct={this.props.newProduct} resetNewProduct={this.props.resetNewProduct} deleteProduct={this.props.deleteProduct} logged_in={this.props.logged_in} isValidated={this.props.isValidated} {...routerProps} />)} /> */}
    
                </Container>
            </div>

            )
        }
}

export default ProductShow