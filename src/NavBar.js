import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import ModalTemplate  from "./ModalTemplate";



class NavBar extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showLedModal = this.showLedModal.bind(this);

    this.state = {
      isOpen: false,
      isModalOpen: false,
      modalTitle: "Modal",
      modalBodyType: null
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


  render() {
   
    return (
      <div id="navBar">
        <Navbar className="fixed-top navbar-dark bg-dark" light expand="md">
          <NavbarBrand href="#">Smart Home</NavbarBrand>
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
                  <DropdownItem>
                    Abrir/Cerrar Puerta
                  </DropdownItem>
                  <DropdownItem>
                   Verificar estatus de ventana
                  </DropdownItem>

                  <DropdownItem divider />
                  <DropdownItem>
                    Reiniciar base de datos
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
