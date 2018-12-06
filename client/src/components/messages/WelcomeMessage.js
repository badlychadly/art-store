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
        // debugger;
        this.props.resetWelcome()
        this.timerHandle = 0;              
      }, 2000); 
  }

  componentWillUnmount() {
    if (this.timerHandle) {  
        // debugger;                
        clearTimeout(this.timerHandle);      
        this.timerHandle = 0;                
    }        
    this.state.calledReset || this.props.resetWelcome()                                  
  }; 
      
//   }

  render() {
    //   debugger;
    return (
      <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
        Welcome Admin!
      </Alert>
    );
  }
}

export default WelcomeMessage;