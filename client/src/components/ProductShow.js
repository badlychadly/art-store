import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem, Badge, Container, Row, Col, Input  } from 'reactstrap';
import ProductCard from './ProductCard'
// import EditForm from './EditProductForm'
// import './EditInput.css'
// import ProductInput from './ProductInput'
import ProductForm from '../containers/ProductForm'
import InfoTabs from './InfoTabs'


const ProductShow = (props) => {
    
    const product = props.products.find(({ id }) => String(id) === props.match.params.productId)

    // const deleteButton = () => {
    //     return (
    //         <Button hidden={!props.logged_in} onClick={() => props.deleteProduct(product)} color="danger">danger</Button>
            
    //     )
    // }

    // const editButton = () => {
    //     return (
    //         <Button hidden={!props.logged_in} color="warning" tag={Link} to={`/products/${product.id}/edit`} >edit Content</Button>
    //     )
    // }
    console.log(props)

    // console.log(props)
    return props.products.length ? (
        <div>
            <h3 className="text-white">{product.name}</h3>
            {/* <Container className="m-0"> */}
                <Row className="mx-0">
                    <Col sm="8">
                        <ProductCard product={product} />
                        {/* <img src={product.img_url} alt={product.name}/> */}
                    </Col>
                    <Col sm="4">
                    {/* <Col className="px-0 align-self-center" sm="4"> */}

                    {/* <Route exact path={`/products/:productId`} render={routerProps => <InfoTabs product={product} logged_in={props.logged_in} deleteProduct={props.deleteProduct} {...routerProps} /> } /> */}

                    <InfoTabs product={product} logged_in={props.logged_in} deleteProduct={props.deleteProduct} />
                    
                    {/* <InfoTabs product={product} logged_in={props.logged_in} location={props.location} /> */}
                    {/* {editButton()} */}



                        {/* <ListGroup className="">
                            <ListGroupItem className="justify-content-between">Cras justo odio <Badge tag={Link} to={`/products/${product.id}/edit`} className="" color="warning" pill>edit</Badge></ListGroupItem> */}

                           

                            {/* <Input className="text-center" type="text" name="name" value={product.name}  id="name" placeholder="with a placeholder" disabled /> */}
                            {/* <input className="editInput text-center" type="text" autoFocus name="name" value={product.name}/> */}
                            {/* <ProductInput name={`name`}  product={product} /> */}
                            
                            
                            {/* <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
                            <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem> */}
                            
                            <Route path={`/products/:productId/edit`} render={routerProps => props.logged_in ? <ProductForm product={product} {...routerProps}/>: <Redirect to={`/products/${product.id}`} />} />
                        {/* </ListGroup> */}
                        
                        {/* <Link to='/'>  */}
                        
                            {/* {deleteButton()} */}
                        {/* </Link> */}
                    </Col>

                </Row>

            {/* </Container> */}
        </div>
    ) : <p>loading</p>
}

export default ProductShow