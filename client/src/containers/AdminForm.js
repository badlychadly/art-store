import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  Button, Modal, ModalHeader, 
  ModalBody, ModalFooter, Form, 
  FormGroup, Label, Input, FormFeedback, FormText 
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { logInUser } from '../actions/session'






class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        credentials: {username: '', password: ''},
        modal: true,
        invalid: false
    };

    // this.toggle = this.toggle.bind(this);
  }

//   toggle() {
//     this.setState({
//       modal: !this.state.modal
//     });
//   }




  handleOnChange = event => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    this.setState({credentials: credentials});
}

handleOnSubmit = event => {
    event.preventDefault()
    this.props.logInUser(this.state.credentials, this.props.history)
    // this.props.logged_in || this.setState({invalid: true})
    console.log(this.props.logged_in)
    // this.handleInvalid()
}


handleInvalid = () => {
  this.props.logged_in || this.setState({invalid: true})
}


  render() {
    console.log(this.props)
    // debugger;
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <Form onSubmit={this.handleOnSubmit} >
          <ModalBody>


          <FormGroup>
          <Label for="username">Username</Label>
          <Input invalid={this.props.failedLogin} name="username" onChange={this.handleOnChange} value={this.state.credentials.username} />
          
          <Label for="password">Password</Label>
          <Input invalid={this.props.failedLogin} type="password" name="password" onChange={this.handleOnChange} value={this.state.credentials.password} />
          <FormFeedback invalid={this.state.invalid.toString()}>Invalid Username or Password</FormFeedback>
          <FormText>Invalid Username or Password</FormText>
          </FormGroup>


          {/* <div> */}
                    {/* <div> */}
                        {/* <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.handleOnChange} value={this.state.credentials.username}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.handleOnChange} value={this.state.credentials.password}/> */}
                        {/* <input type="submit" name="submit" value="login"/> */}
                    {/* </div> */}
            {/* </div> */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" name="submit">Login</Button>{' '}
            <Button color="secondary" tag={Link} to="/">Cancel</Button>
          </ModalFooter>
                </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    failedLogin: state.session.failedLogin,
    logged_in: state.session.session
  })
}

export default connect(mapStateToProps, { logInUser })(AdminForm)
