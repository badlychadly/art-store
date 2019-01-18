import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, 
    ModalBody, ModalFooter } from 'reactstrap'
import LoadingIcon from '../components/LoadingIcon'
import '../components/CustomModal.css'
import { addProduct, updateProduct } from '../actions/products'


class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            upLoading: false,
            previewUrl: '',
            productInfo: {
                name: "",
                price: "",
                description: "",
                img_url: "",
                prints: false,
                picture: {cloud: null}
            },
            modal: true
        }
    }
    


    checkForProduct = () => {
        // const { name, price, description, img_url } = this.props.product
        const { product } = this.props
        let previewUrl 
        if (!!product) {
          previewUrl  = !!product.picture ? product.picture.cloud.url : product.img_url
            this.setState({
                previewUrl: previewUrl,
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


    componentWillUnmount() {
        // debugger;
        this.props.history.replace({state: undefined})
    }


    handleOnSubmit = event => {
        const { location } = this.props
        this.setState({
            upLoading: true
        })
        event.preventDefault()
        !!this.props.product ? this.props.updateProduct(this.state.productInfo) : this.props.addProduct(this.state.productInfo)
        // console.log(this.props.location)
        // debugger
        !!(!!location.state && location.state.isEdit) && this.props.history.goBack()
        // if (!!location.state && location.state.isEdit) {
        //     this.props.history.goBack()
            
        // }
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

    handleFileUpload = e => {
        let state = this.state
        let reader = new FileReader()
        let file = e.target.files[0];
        
        reader.onloadend = () => {
            this.setState({
                ...state, 
                previewUrl: reader.result,
                productInfo: {...state.productInfo, picture: {cloud: file}}
            })

        }
        reader.readAsDataURL(file)
    };

    previewPicture = (file) => {
       return !!this.state.previewUrl &&
        (
        <>
        <FormText color="primary">
        Preview
        </FormText>
            <img className="mt-1 border border-primary bg-info" width="50%" src={this.state.previewUrl} alt="pic"/>
            </>
        )

        
    }

    render() {
        // debugger;
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
                                    <Input type="text" name="name" onChange={this.handleOnChange} value={this.state.productInfo.name} id="name" placeholder="with a placeholder" required />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="price" sm={2} className="text-dark">Price</Label>
                                <Col sm={10}>
                                    <Input type="text" name="price" onChange={this.handleOnChange} value={this.state.productInfo.price} id="price" placeholder="price placeholder" required />
                                </Col>
                            </FormGroup>
                            
                            
                            <FormGroup row>
                            <Label for="description" sm={2} className="text-dark">Description</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="description" onChange={this.handleOnChange} value={this.state.productInfo.description} id="description" required />
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
                                <Input className="text-dark"
                                    type="file" 
                                    name="picture" 
                                    id="fileUpload" 
                                    accept="image/*"  
                                    ref={fileInputEl => (this.fileInputEl = fileInputEl) }
                                    onChange={this.handleFileUpload}
                                    required 
                                /> 
                                {this.previewPicture()}

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
                        
                        {/* <FormGroup check row> */}
                    {/* <Col sm={{ size: 10, offset: 2 }}> */}

                    {/* TRY DISABLING SUBMIT BUTTON ON SUBMIT */}
                    {this.state.upLoading ? (
                        <>
                            <p className="text-primary mb-0">Uploading...</p>
                            <Button color="primary" disabled><LoadingIcon/></Button>
                        </>
                    ) : (
                        <Button color="primary">Submit</Button>
                        
                    )
                    }
                    {/* </Col> */}
                    {/* </FormGroup>                            */}
                     <Button color="secondary" onClick={() => this.props.history.goBack()}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>


            </div>
        )
    }
}

export default connect(null, { addProduct, updateProduct })(ProductForm);