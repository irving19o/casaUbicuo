import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
    state = {
        background: '#fff',
        disableAlpha: true
    };

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
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