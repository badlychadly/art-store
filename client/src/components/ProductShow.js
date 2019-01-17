import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { Button, Row, Col, Container  } from 'reactstrap';
import ProductCard from './ProductCard'
import ImageControl from './ImageControl'

import ProductForm from '../containers/ProductForm'
import InfoTabs from './InfoTabs'
// import { PrivateRoute, AdminLoginRoute } from './CustomRoutes'


class ProductShow extends Component {
    
    

    componentDidMount() {
        !!this.props.newProduct.id && this.props.resetNewProduct() 
    }

     viewButtons = () => {
        return ( 
          <div>
            <Button size="sm" hidden={!this.props.isValidated} color="warning" tag={Link} to={{
                pathname: `/products/${this.product.id}/edit`,
                state: {isEdit: true}
            }} >edit Content</Button>
            <Link to={{pathname: '/', state: {confirmDelete: true}}}> 
              <Button size="sm" hidden={!this.props.isValidated} onClick={() => this.props.deleteProduct(this.product)} color="danger">Delete</Button>
                            
            </Link>
          </div>
        )
    }


    
    
        render() {
            this.product = this.props.product
            return (
            <div>
                <Container>
                    {/* <span> */}
                <h3 className="text-white">{this.product.name}</h3>
                {this.viewButtons()}
                    {/* </span> */}
                {/* <Container className="m-0"> */}
                {/* <Button size="sm" tag={Link} to={`/products/${this.product.id + 1}`}> > </Button> */}
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
                            {/* </ListGroup> */}
                            
                            {/* <Link to='/'>  */}
                            {/* {this.viewButtons()} */}
                            
                                {/* {deleteButton()} */}
                            {/* </Link> */}
                        </Col>
    
                    </Row>
                    {/* <Route path={`/products/:productId`} render={routerProps => (<ProductShow products={this.props.products} newProduct={this.props.newProduct} resetNewProduct={this.props.resetNewProduct} deleteProduct={this.props.deleteProduct} logged_in={this.props.logged_in} isValidated={this.props.isValidated} {...routerProps} />)} /> */}
    
                </Container>
            </div>

            )
        }
}

export default ProductShow