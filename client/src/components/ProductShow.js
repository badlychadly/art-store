import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem, Badge, Container, Row, Col, Input  } from 'reactstrap';
import ProductCard from './ProductCard'
// import EditForm from './EditProductForm'
import './EditInput.css'
import ProductInput from './ProductInput'
import ProductForm from '../containers/ProductForm'


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
                            {/* <ListGroupItem className="justify-content-between">Cras justo odio <Badge tag={Link} to={`/products/${product.id}/edit`} className="" color="warning" pill>edit</Badge></ListGroupItem> */}

                            {/* TRY ALTERNATING ON LISTGROUPITEM AND INPUT WHEN CLICKED, ADJUST INPUT PADDING */}

                            {/*     position: relative;
                        display: block;
                        padding: .75rem 1.25rem;
                        margin-bottom: -1px;
                        background-color: #fff;
                        border: 1px solid rgba(0,0,0,.125);
                    } */}

                            {/* <Input className="text-center" type="text" name="name" value={product.name}  id="name" placeholder="with a placeholder" disabled /> */}
                            {/* <input className="editInput text-center" type="text" autoFocus name="name" value={product.name}/> */}
                            <ProductInput  product={product} />
                            
                            
                            <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
    <Route path={`/products/:productId/edit`} render={routerProps => <ProductForm product={product}/>} />
                        </ListGroup>
                        
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