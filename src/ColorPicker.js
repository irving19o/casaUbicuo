import React from 'react';
import db from './database'
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {

    constructor(props) {
        super(props)
       
        
        var self = this;
        this.tmpstat= ""

        db.ref('color').on("value", function (snapshot) {
            console.log("Color:", snapshot.val().value);
            self.tmpstat= snapshot.val().value;
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

        this.state = {
            background: this.tmpstat,
            disableAlpha: true
        };
  
        
    }

    componentDidMount(){
        var that = this;
        db.ref('color').once("value", function(snapshot){
            console.log("Color initial:", snapshot.val().value);
            that.setState({background: snapshot.val().value});
        });
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        db.ref('color').set({ value: color.hex });
    };
    

    

    render() {
        
        return (
            <SketchPicker
                color={this.state.background}
                disableAlpha= {this.state.disableAlpha}
                onChangeComplete={this.handleChangeComplete}
            />
        );
    }
}

export default ColorPicker;