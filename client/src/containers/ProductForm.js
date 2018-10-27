import React, { Component } from 'react';


class ProductForm extends Component {
    state = {
        name: "",
        price: "",
        description: "",
        img_url: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
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
                </form>
            </div>
        )
    }
}

export default ProductForm;