import React, { Component } from 'react';
import {
  Alert
} from 'reactstrap';



class AlertTemplate extends Component {
  
  constructor(props) {
    super(props);

  
    this.onDismiss =  this.props.toggle

    this.state = {
      visible: this.props.isOpen,
    };
  }


  render() {
   
    return (
      <div>
        <Alert color="danger" isOpen={this.props.isAlertShowed} toggle={this.onDismiss} >
          La ventana se encuentra Abierta
        </Alert>
      </div>
    );
  }
}

export default AlertTemplate;
