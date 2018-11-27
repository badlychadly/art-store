import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, 
    ModalBody, ModalFooter } from 'reactstrap'
import ProductInput from '../components/ProductInput'

import { addProduct, updateProduct } from '../actions/products'


class ProductForm extends Component {
    
    state = {
        name: "",
        price: "",
        description: "",
        img_url: "",
        prints: true
    }


    checkForProduct = () => {
        // const { name, price, description, img_url } = this.props.product
        const { product } = this.props
        if (!!this.props.product) {
            this.setState({
                ...product
                // name: name,
                // price: price
            })
        }
    }

    componentDidMount() {
        this.checkForProduct()
    }


    handleOnSubmit = event => {
        event.preventDefault()
        !!this.props.product ? this.props.updateProduct(this.state) : this.props.addProduct(this.state)
    }


    handleOnChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [target.name]: value
        })
    }

    render() {
        // debugger;
        // console.log(this.state)
        return (
            <div>

                 <Form onSubmit={this.handleOnSubmit} className="text-white">
                    <FormGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="name" onChange={this.handleOnChange} value={this.state.name} id="name" placeholder="with a placeholder" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="price" sm={2}>Price</Label>
                        <Col sm={10}>
                            <Input type="text" name="price" onChange={this.handleOnChange} value={this.state.price} id="price" placeholder="price placeholder" />
                        </Col>
                    </FormGroup>
                    
                    
                    <FormGroup row>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="description" onChange={this.handleOnChange} value={this.state.description} id="description" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="img_url" sm={2}>Img_url</Label>
                    <Col sm={10}>
                        <Input type="text" name="img_url" onChange={this.handleOnChange} value={this.state.img_url} id="price" placeholder="price placeholder" />
                    </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </Col>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input name="prints" type="checkbox" checked={this.state.prints} onChange={this.handleOnChange} />{' '}
                            Check me out
                        </Label>
                        </FormGroup>
                    
                    <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">Submit</Button>
                    </Col>
                    </FormGroup>
                </Form>

            </div>
        )
    }
}

export default connect(null, { addProduct, updateProduct })(ProductForm);