import React, { Component } from 'react';
import {
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter 
} from 'reactstrap';
import ColorPicker from './ColorPicker';


class ModalTemplate extends React.Component {
    constructor(props) {
        super(props);      
        console.log(this.props);
        this.toggle = this.props.toggle
    }

    render() {
        const modalBodyType = this.props.modalBodyType;
        let modalRender;

        if (modalBodyType =='ColorPicker') {
            modalRender = <ColorPicker></ColorPicker>
        }
        
        return (
            <div>
                <Modal isOpen={this.props.isOpen} >
                    <ModalHeader>
                    {this.props.modalTitle}
                    </ModalHeader>
                    <ModalBody>
                      {modalRender}
                       
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                        Cerrar
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalTemplate;