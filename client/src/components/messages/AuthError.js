import React, { Component } from 'react'
import { Alert } from 'reactstrap';


class AuthError extends Component {
    // constructor(props) {
    //   super(props);
    //   debugger;
  
      state = {
        visible: false
      };


      componentDidMount() {

        if (this.props.history.location.state && this.props.history.location.state.error) {
            this.props.trackAttempt()
            this.props.history.replace({pathname: this.props.location.pathname, state: {}})
            this.setState({visible: true})
        }
      }

  
    onDismiss = () => {
        this.props.unTrack()
        this.setState({ visible: false });
    }
  
    render() {
      return (
        <Alert className="bg-danger border-0" isOpen={this.state.visible} toggle={this.onDismiss}>
          You do not have Access to this page
        </Alert>
      );
    }
  }
  

export default AuthError