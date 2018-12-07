import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, 
    ModalBody, ModalFooter } from 'reactstrap'
import '../components/CustomModal.css'
import { addProduct, updateProduct } from '../actions/products'


class ProductForm extends Component {
    constructor(props) {
        super(props)
        // debugger;
        this.state = {
            productInfo: {
                name: "",
                price: "",
                description: "",
                img_url: "",
                prints: false
            },
            modal: true
        }
    }
    
    // state = {
    //     productInfo: {name: "",
    //     price: "",
    //     description: "",
    //     img_url: "",
    //     prints: true},
    //     modal: true
    // }


    checkForProduct = () => {
        // const { name, price, description, img_url } = this.props.product
        const { product } = this.props
        if (!!this.props.product) {
            this.setState({
                productInfo: product
                // name: name,
                // price: price
            })
        }
    }

    componentDidMount() {
        this.checkForProduct()
        // debugger;
    }


    handleOnSubmit = event => {
        event.preventDefault()
        !!this.props.product ? this.props.updateProduct(this.state.productInfo) : this.props.addProduct(this.state.productInfo)
        this.props.history.goBack()
    }


    handleOnChange = event => {
        const target = event.target
        const productInfo = this.state.productInfo
        const value = target.type === 'checkbox' ? target.checked : target.value
        productInfo[target.name] = value
        this.setState({
            productInfo: productInfo
        })
    }

    render() {
        // console.log(this)
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <Form onSubmit={this.handleOnSubmit} className="text-white">
                        <ModalBody>
                            <FormGroup row>
                                <Label for="name" sm={2} className="text-dark">Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="name" onChange={this.handleOnChange} value={this.state.productInfo.name} id="name" placeholder="with a placeholder" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="price" sm={2} className="text-dark">Price</Label>
                                <Col sm={10}>
                                    <Input type="text" name="price" onChange={this.handleOnChange} value={this.state.productInfo.price} id="price" placeholder="price placeholder" />
                                </Col>
                            </FormGroup>
                            
                            
                            <FormGroup row>
                            <Label for="description" sm={2} className="text-dark">Description</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="description" onChange={this.handleOnChange} value={this.state.productInfo.description} id="description" />
                            </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label for="img_url" sm={2} className="text-dark">Img_url</Label>
                            <Col sm={10}>
                                <Input type="text" name="img_url" onChange={this.handleOnChange} value={this.state.productInfo.img_url} id="price" placeholder="price placeholder" />
                            </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label for="exampleFile" sm={2} className="text-dark">File</Label>
                            <Col sm={10}>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                                </FormText>
                            </Col>
                            </FormGroup>
                            <FormGroup check>
                                <Label check className="text-dark">
                                    <Input name="prints" type="checkbox" checked={this.state.productInfo.prints} onChange={this.handleOnChange} />{' '}
                                    Prints Available?
                                </Label>
                                </FormGroup>
                    
                    
                        </ModalBody>
                        <ModalFooter>
                        <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">Submit</Button>
                    </Col>
                    </FormGroup>                           
                     <Button color="secondary" onClick={() => this.props.history.goBack()}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>


            </div>
        )
    }
}

export default connect(null, { addProduct, updateProduct })(ProductForm);