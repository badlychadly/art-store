import React, { Component } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { Button, Row, Col  } from 'reactstrap';
import ProductCard from './ProductCard'

import ProductForm from '../containers/ProductForm'
import InfoTabs from './InfoTabs'
import { PrivateRoute, AdminLoginRoute } from './CustomRoutes'



class ProductShw extends Component {
    
     product = this.props.products.find(({ id }) => {
        // WHEN URL CHANGES MATCH.PARAMS.PRODUCTID IS "NEW" INSTEAD OF PRODUCT.ID
        // debugger;
        return String(id) === this.props.match.params.productId
    })

     viewButtons = () => {
        return ( 
          <div>
            <Button size="sm" hidden={!this.props.logged_in} color="warning" tag={Link} to={`/products/${this.product.id}/edit`} >edit Content</Button>
            <Link to='/'> 
              <Button size="sm" hidden={!this.props.logged_in} onClick={() => this.props.deleteProduct(this.product)} color="danger">danger</Button>
                            
            </Link>
          </div>
        )
    }
    
    // return this.props.products.length ? (
        render() {
            // debugger;
            return (
            <div>
                <h3 className="text-white">{this.product.name}</h3>
                {/* <Container className="m-0"> */}
                    <Row className="mx-0">
                        <Col sm="8">
                            <ProductCard product={this.product} />
                            {/* <img src={product.img_url} alt={product.name}/> */}
                        </Col>
                        <Col sm="4">
                        
    
                        <InfoTabs product={this.product} logged_in={this.props.logged_in} deleteProduct={this.props.deleteProduct} />
                        
    
    
    
                            {/* <PrivateRoute path="/products/new" product={this.product} logged_in={this.props.logged_in} component={ProductForm} /> */}
                                
                                <Route path={`/products/:productId/edit`} render={routerProps => this.props.logged_in ? <ProductForm product={this.product} {...routerProps}/>: <Redirect to={`/products/${this.product.id}`} />} />
                            {/* </ListGroup> */}
                            
                            {/* <Link to='/'>  */}
                            {this.viewButtons()}
                            
                                {/* {deleteButton()} */}
                            {/* </Link> */}
                        </Col>
    
                    </Row>
    
                {/* </Container> */}
            </div>

            )
        }
    // ) : <p>loading</p>
}

export default ProductShw