import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class FileInput extends Component {
    state = {
        picture: null
    }

    handleFileUpload = e => {
        this.setState({
          picture: e.target.files[0],
        });
    };

    handleSubmit = e => {
        e.preventDefault()
        this.props.addPicture(this.state.picture)
    }

    

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input 
                    type="file" 
                    name="file" 
                    id="fileUpload" 
                    accept="image/*"  
                    ref={fileInputEl => (this.fileInputEl = fileInputEl) }
                    onChange={this.handleFileUpload} 
                />
                <Input type="submit" value="add" />
            </Form>
        )
    }
}