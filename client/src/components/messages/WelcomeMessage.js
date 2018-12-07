import React, { Component } from 'react';
import { Alert } from 'reactstrap';


class WelcomeMessage extends Component {


    state = {
      visible: true,
      calledReset: false
    };



  onDismiss = () => {
    //   debugger;
    if (this.timerHandle) {                  
        clearTimeout(this.timerHandle);      
        this.timerHandle = 0;                
    } 
    this.setState({ visible: false });
  }

  
  
  componentDidMount() {
    this.timerHandle = setTimeout(() => {
        this.setState({ visible: false, calledReset: true });    
        this.props.resetMessage()
        this.timerHandle = 0;              
    }, 2000); 
  }

  componentWillUnmount() {
    if (this.timerHandle) {  
        clearTimeout(this.timerHandle);      
        this.timerHandle = 0;                
    }        
    this.state.calledReset || this.props.resetMessage()                                  
  }; 
      


  render() {
    return (
      <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
        Welcome Admin!
      </Alert>
    );
  }
}

export default WelcomeMessage;