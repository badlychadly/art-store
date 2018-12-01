import React, { Component } from 'react'
import { Alert } from 'reactstrap';


class AuthError extends Component {
    // constructor(props) {
    //   super(props);
    //   debugger;
  
      state = {
        visible: true
      };
    //   this.onDismiss = this.onDismiss.bind(this);
    //   debugger;
    //   this.props.unTrack = props.unTrack.bind(this)
    // }
// WHY IS unTrack not available??
  
    onDismiss = () => {
        // debugger;
        this.setState({ visible: false });
        this.props.unTrack()
    }
  
    render() {
        // debugger;
      return (
        <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
          I am an alert and I can be dismissed!
        </Alert>
      );
    }
  }
  

export default AuthError