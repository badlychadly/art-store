import React, { Component } from 'react'
import { Alert } from 'reactstrap';

// FIX MESSAGES REPLACE EACHOTHER WHEN CALLED BACK TO BACK
class Messages extends Component {
  
      state = {
        visible: true
      };

      selectTask = () => {
        if (this.props.sendError || this.props.confirmDelete) {
          this.setState({ visible: false }); 
            this.props.history.replace({pathname: this.props.location.pathname, state: undefined})
        } else if (this.props.sendMessage) {
          this.setState({ visible: false, calledReset: true });    
          this.props.resetMessage()
        }
      }


      componentDidMount() {
          this.timerHandle = setTimeout(() => {
            this.selectTask()
            this.timerHandle = 0;              
        }, 4000);
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
        <div className="Message w-100">
          { this.props.sendMessage.welcome &&
            <Alert 
              className="text-white bg-primary border-0" 
              isOpen={this.state.visible} 
              toggle={this.onDismiss}>
              Welcome Admin!
            </Alert>
          }

          { (this.props.sendError) &&
            <Alert 
              className="text-white bg-danger border-0" 
              isOpen={this.state.visible}
              toggle={this.onDismiss}>
              You do not have Access to this page
            </Alert>
          }

          { (this.props.confirmDelete) &&
            <Alert 
              className="bg-success border-0 text-white" 
              isOpen={this.state.visible}
              toggle={this.onDismiss}>
              Product has been removed
            </Alert>
          }

          { (this.props.sendMessage.logout) &&
            <Alert 
              className="bg-info text-white border-0" 
              isOpen={this.state.visible}
              toggle={this.onDismiss}>
              You are now logged out
            </Alert>
          }
        </div>
      );
    }
  }
  

export default Messages