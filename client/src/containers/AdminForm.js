import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
import { logInUser } from '../actions/session'


// class AdminForm extends Component {

    // state = {credentials: {username: '', password: ''}}

    // handleOnChange = event => {
    //     const field = event.target.name;
    //     const credentials = this.state.credentials;
    //     credentials[field] = event.target.value;
    //     this.setState({credentials: credentials});
    // }

    // handleOnSubmit = event => {
    //     event.preventDefault()
    //     this.props.logInUser(this.state.credentials, this.props.history)
    // }

//     render() {
//         // debugger;
//         return (
//             <div>
//                 <form onSubmit={this.handleOnSubmit} >
//                     <div>
//                         <label htmlFor="username">Username</label>
//                         <input type="text" name="username" onChange={this.handleOnChange} value={this.state.credentials.username}/>
//                     </div>
//                     <div>
//                         <label htmlFor="password">Password</label>
//                         <input type="password" name="password" onChange={this.handleOnChange} value={this.state.credentials.password}/>
//                         <input type="submit" name="submit" value="login"/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }

// }


// export default connect(null, { logInUser })(AdminForm)




class AdminForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        credentials: {username: '', password: ''},
        modal: true
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
}

  render() {
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <form onSubmit={this.handleOnSubmit} >
          <ModalBody>
          {/* <div> */}
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.handleOnChange} value={this.state.credentials.username}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.handleOnChange} value={this.state.credentials.password}/>
                        {/* <input type="submit" name="submit" value="login"/> */}
                    </div>
            {/* </div> */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" name="submit" onClick={this.toggle}>Login</Button>{' '}
            <Button color="secondary" tag={Link} to="/">Cancel</Button>
          </ModalFooter>
                </form>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { logInUser })(AdminForm)
