import React, { Component } from 'react'
// import { Alert } from 'reactstrap';
import WelcomeMessage from './WelcomeMessage'
import AuthError from './AuthError'


class Messages extends Component {
  
    //   state = {
    //     visible: true
    //   };


    //   componentDidMount() {
    //       this.timerHandle = setTimeout(() => {
    //         this.setState({ visible: false }); 
    //         this.this.props.history.replace({pathname: this.this.props.location.pathname, state: {}})   
    //         this.timerHandle = 0;              
    //     }, 2000);
    //   }

  
    // onDismiss = () => {
    //     this.setState({ visible: false });
    // }

    
    // componentWillUnmount() {
    //   // debugger;
    //   if (this.timerHandle) {  
    //       clearTimeout(this.timerHandle);      
    //       this.timerHandle = 0;                
    //   }                                          
    // };
  
    render() {
      return (
        <div>
          { this.props.sendMessage &&
                    <WelcomeMessage history={this.props.history} resetMessage={this.props.resetMessage} sendMessage={this.props.sendMessage} location={this.props.location} />
                }
                { (!!this.props.location.state && this.props.location.state.error) &&
                <AuthError history={this.props.history} location={this.props.location} unTrack={this.props.unTrack} trackAttempt={this.props.trackAttempt} attemptedAccess={this.props.attemptedAccess} />
            }
        </div>
      );
    }
  }
  

export default Messages