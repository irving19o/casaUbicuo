import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import db from './database';    
import closedDoor from './img/closedDoor.png';
import openDoor from './img/openDoor.png';


class Door extends React.Component {
    constructor(props) {
        super(props);  
        
        this.state={
            isDoorOpen: "1"
        }

        this.closeDoorFn = this.closeDoorFn.bind(this);
        this.openDoorFn = this.openDoorFn.bind(this);
        
    }

    closeDoorFn(){
        this.setState({isDoorOpen: "0"});
        db.ref('door').set({ value: "0" });

    }

    openDoorFn(){
        this.setState({isDoorOpen: "1"});
        db.ref('door').set({ value: "1" });
    }


    componentDidMount(){
        var that = this;
        db.ref('door').once("value", function(snapshot){
            console.log("door initial:", snapshot.val().value);
            that.setState({isDoorOpen: snapshot.val().value});
        });
    
    }

    render() {
        let sourceImg;
        if (this.state.isDoorOpen == "1") {
            sourceImg = openDoor;
        }
        else{
            sourceImg = closedDoor;
        }
        
        return (
            <div>
              <Card>
                <CardImg top width="30%" src={sourceImg} />
                <CardBody>
                  <CardTitle>Opciones</CardTitle>
                  <div> 
                  <Button onClick={this.openDoorFn} color="success">Abrir puerta</Button>{' '}
                  <Button onClick={this.closeDoorFn} color="danger">Cerrar puerta</Button>{' '}
                  </div>
                </CardBody>
              </Card>
            </div>
          );
    }
}

export default Door;