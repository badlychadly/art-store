import React, { Component } from 'react'
import { Col, Button, Form, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


export default class ContactPage extends Component {


    render() {
        return (
            <div>
                <h3 className="text-white">To contact us leave your name and email with your Question and we will get back to you as soon as possible</h3>

                <Form>
                    <Col sm="6">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
                            <Input placeholder="Alphred" />
                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@email</InputGroupAddon>
                            <Input placeholder="bill@gmail.com" />
                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Question</InputGroupAddon>
                            <Input type="textarea" />
                        </InputGroup>
                    </Col>
                </Form>
            </div>
        )
    }
}
