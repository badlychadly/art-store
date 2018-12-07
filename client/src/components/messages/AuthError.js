import React, { Component } from 'react'
import { Alert } from 'reactstrap';


class AuthError extends Component {
  
      state = {
        visible: true
      };


      componentDidMount() {
          this.timerHandle = setTimeout(() => {
            this.setState({ visible: false }); 
            this.props.history.replace({pathname: this.props.location.pathname, state: {}})   
            this.timerHandle = 0;              
        }, 2000);
      }

  
    onDismiss = () => {
        this.setState({ visible: false });
    }

    
    componentWillUnmount() {
      // debugger;
      if (this.timerHandle) {  
          clearTimeout(this.timerHandle);      
          this.timerHandle = 0;                
      }                                          
    };
  
    render() {
      return (
        <Alert className="bg-danger border-0" isOpen={this.state.visible} toggle={this.onDismiss}>
          You do not have Access to this page
        </Alert>
      );
    }
  }
  

export default AuthError