import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import WelcomeMessage from './WelcomeMessage'
import AuthError from './AuthError'


class Messages extends Component {
  
      state = {
        visible: true
      };

      selectTask = () => {
        if (this.props.sendError) {
          this.setState({ visible: false }); 
            this.props.history.replace({pathname: this.props.location.pathname, state: {}})
        } else if (this.props.sendWelcome) {
          this.setState({ visible: false, calledReset: true });    
          this.props.resetMessage()
        }
      }


      componentDidMount() {
          this.timerHandle = setTimeout(() => {
            this.selectTask()
            this.timerHandle = 0;              
        }, 2000);
      }

  
    onDismiss = () => {
        this.setState({ visible: false });
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
        <div>
          { this.props.sendWelcome &&
            <Alert color="success" isOpen={this.props.isOpen} toggle={this.onDismiss}>
              Welcome Admin!
            </Alert>
          }
          { (this.props.sendError) &&
            <Alert className="bg-danger border-0" isOpen={this.props.visible}>
              You do not have Access to this page
            </Alert>
          }
        </div>
      );
    }
  }
  

export default Messages