import React, { Component } from 'react'
import {Col, Row, Form, Input, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'


class AboutPage extends Component {
    // ADD LOADING ICON AND RUN TOGGLE ONLY AFTER API REQUEST
    // AUTO ROWS AND COLUMNS FOR TEXTAREA INPUT

    state = {
        about: "",
        modal: false
    }


    componentDidMount() {
        this.setState({about: this.props.about})
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }


    handleSubmit = event => {
        event.preventDefault()
        this.props.updateInfo(this.state)
        this.toggle()
    }


    handleChange = event => {
        // debugger;
        this.setState({
            about: event.target.value
        })
    }



    // value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum, deleniti ipsam magnam veritatis ratione exercitationem quisquam nulla quidem, eligendi reprehenderit. Velit debitis voluptates exercitationem, veniam unde aliquid perspiciatis adipisci?"
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    <h3 className="text-white align-self-center">About Artist</h3>
                    </Col>
                    {/* <Col sm="2" className="m-auto"> */}
                <Button size="sm" color="warning" hidden={!this.props.isValidated} onClick={this.toggle}>Edit Content</Button>
                    {/* </Col> */}
                </Row>
                <Col sm="8" className="bg-white mx-auto">
                    <p>{this.state.about}</p>
                </Col>
                
                
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <Form onSubmit={this.handleSubmit}>
                    <ModalBody>

                        <Col className="text-dark" sm={10}>
                            <Input type="textarea" name="text" onChange={this.handleChange} id="exampleText" value={this.state.about} cols="100" rows="60" />
                        </Col>
                        {/* <input type="submit" name="submit" value="Add Changes"/> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                        </Form>
                    </Modal>
               
            </Container>
        )

    }
}

export default AboutPage