import React from 'react';
import { Alert } from 'reactstrap';

// FIGURE OUT HOW TO SET TIMER

class WelcomeMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }
  
//   componentDidMount() {
    //   debugger
    // if (this.props.location.state && ) {
        
    // }
    // this.props.history.replace({pathname: this.props.location.pathname, state: {}})
//   }

  render() {
    //   debugger;
    return (
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
        I am an alert and I can be dismissed!
      </Alert>
    );
  }
}

export default WelcomeMessage;