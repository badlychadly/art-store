import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addProduct } from '../actions/products'


class ProductForm extends Component {
    state = {
        name: "",
        price: "",
        description: "",
        img_url: ""
    }


    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addProduct(this.state)
    }


    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name}/>
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input type="text" name="price" onChange={this.handleOnChange} value={this.state.price}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input type="text" name="description" onChange={this.handleOnChange} value={this.state.description}/>
                    </div>
                    <div>
                        <label htmlFor="img_url">Image_Url: </label>
                        <input type="text" name="img_url" onChange={this.handleOnChange} value={this.state.img_url}/>
                    </div>
                    <div>
                        <input type="submit" value="Add"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addProduct })(ProductForm);