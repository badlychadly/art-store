import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem, Badge, Container, Row, Col  } from 'reactstrap';
import ProductCard from './ProductCard'
import EditForm from './EditProductForm'


const ProductShow = (props) => {
    
    const product = props.products.find(({ id }) => String(id) === props.match.params.productId)

    const buttonView = () => {
        return (
            <Button hidden={!props.logged_in} onClick={() => props.deleteProduct(product)} color="danger">danger</Button>
            
        )
    }

    // console.log(props)
    return props.products.length ? (
        <div>
            <h3 className="text-white">{product.name}</h3>
            <Container>
                <Row>
                    <Col sm="8">
                        <ProductCard product={product} />
                        {/* <img src={product.img_url} alt={product.name}/> */}
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroupItem className="justify-content-between">Cras justo odio <Badge tag={Link} to={`/products/${product.id}/edit`} className="" color="warning" pill>edit</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
                        </ListGroup>
            <Route path={`/products/:productId/edit`} component={EditForm} />
                        
                        <Link to='/'> 
                        
                            {buttonView()}
                        </Link>
                    </Col>

                </Row>

            </Container>
        </div>
    ) : <p>loading</p>
}

export default ProductShow