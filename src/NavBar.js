import React, { Component } from 'react';
import db from './database'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Alert
} from 'reactstrap';
import icon from './img/icon.png'

import ModalTemplate  from "./ModalTemplate";
import AlertTemplate from "./AlertTemplate";



class NavBar extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showLedModal = this.showLedModal.bind(this);
    this.showDoorModal = this.showDoorModal.bind(this);
    this.showWindowModal = this.showWindowModal.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.hiddeAlert = this.hiddeAlert.bind(this);

    this.state = {
      isOpen: false,
      isModalOpen: false,
      modalTitle: "Modal",
      modalBodyType: null,
      isAlertShowed: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  showModal() {
    //click on 
    this.setState({
      isModalOpen: true
    });
  }

  hideModal(){
    this.setState({
      isModalOpen: false
    });
  }

  showLedModal(){

    this.setState({
      isModalOpen: true,
      modalTitle: "Cambiar color Led RGB", 
      modalBodyType: "ColorPicker"
    });
  }

  showDoorModal(){

    this.setState({
      isModalOpen: true,
      modalTitle: "Abrir - Cerrar puerta", 
      modalBodyType: "openCloseDoor"
    });
  }

  showWindowModal(){

    this.setState({
      isModalOpen: true,
      modalTitle: "Verificar estado de ventana", 
      modalBodyType: "windowState"
    });
  }

  showAlert(){
    this.setState({
      isAlertShowed: true,
    });

  }

  hiddeAlert() {
    this.setState({
      isAlertShowed: !this.state.isAlertShowed
    });
  }

  componentDidMount(){
    var that = this;
    db.ref('window').on("value", function(snapshot){
        console.log("window:", snapshot.val().value);
        that.setState({isAlertShowed: snapshot.val().value});
    });
}


  render() {
   
    return (
      
      <div id="navBar">
      <div id="dimScreen"></div>
      <div id="alert">
        <AlertTemplate 
        isAlertShowed={this.state.isAlertShowed} 
        toggle={this.hiddeAlert}
        />
      </div>
        <Navbar className="fixed-top navbar-dark bg-dark" light expand="md">
          <NavbarBrand href="#"><img src={icon}/> Smart Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Opciones
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.showLedModal}>
                    Cambiar color led
                  </DropdownItem>
                  <DropdownItem onClick={this.showDoorModal}>
                    Abrir/Cerrar Puerta
                  </DropdownItem>
                  <DropdownItem onClick={this.showWindowModal}>
                   Verificar estado de ventana
                  </DropdownItem>

                  <DropdownItem divider />
                  <DropdownItem disabled={true}>
                     <a href="https://git.io/fplNU" >Proyecto en GitHub</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <ModalTemplate 
        isOpen= {this.state.isModalOpen}
        modalTitle= {this.state.modalTitle}
        toggle= {this.hideModal}
        modalBodyType={this.state.modalBodyType}
        />

      
     
      </div>
    );
  }
}

export default NavBar;
