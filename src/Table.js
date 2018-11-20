import React from 'react';
import db from './database'

class Table extends React.Component {

    constructor(props) {
        super(props);

    }
    
    sendToArduinio(selector) {
        var element = document.querySelector(selector)
        console.log(element);
        if (element.id.includes('living')) {
            document.querySelectorAll("#living1").forEach(item => { this.controlLigths(item) });
        }
        else {
            this.controlLigths(element);
        }

        console.log(selector);

    }

    controlLigths(element) {
        console.log(element);
        if (element.hasAttribute("style")) {
            element.removeAttribute("style");
            db.ref(element.id).set({ value: '1' });
        } else {
            element.setAttribute("style", "filter: brightness(40%);");
            db.ref(element.id).set({ value: '0' });
        }
    }


    
    render() {
        return (

            <table width={961} height={541} border={0} cellPadding={0} cellSpacing={0} id="table">
                <tbody><tr>
                    <td colSpan={8}>
                        <img src="imagenes/SmartHouse_01.gif" width={960} height={89} alt="true" /></td>
                    <td>
                        <img src="imagenes/espacio.gif" width={1} height={89} alt="true" /></td>
                </tr>
                    <tr>
                        <td rowSpan={6}>
                            <img src="imagenes/SmartHouse_02.gif" width={179} height={451} alt="true" /></td>
                        <td colSpan={3} rowSpan={2}>
                            <img className="living" id="living1" onClick={this.sendToArduinio.bind(this,'#living1')} src="imagenes/living1.gif" width={366} height={117} alt="true" /></td>
                        <td colSpan={2}>
                            <img id="kitchen" onClick={this.sendToArduinio.bind(this, '#kitchen')} src="imagenes/kitchen.gif" width={114} height={101} alt="true" /></td>
                        <td>
                            <img id="storage" onClick={this.sendToArduinio.bind(this, '#storage')} src="imagenes/storage.gif" width={88} height={101} alt="true" /></td>
                        <td rowSpan={6}>
                            <img src="imagenes/SmartHouse_06.gif" width={213} height={451} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={1} height={101} alt="true" /></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>
                            <img className="living" id="living2"onClick={this.sendToArduinio.bind(this, '#living2')} src="imagenes/living2.gif" width={97} height={49} alt="true" /></td>
                        <td colSpan={2} rowSpan={3}>
                            <img id="bedroom2"onClick={this.sendToArduinio.bind(this, '#bedroom2')} src="imagenes/bedroom2.gif" width={105} height={171} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={1} height={16} alt="true" /></td>
                    </tr>
                    <tr>
                        <td rowSpan={3}>
                            <img id="parking"onClick={this.sendToArduinio.bind(this, '#parking')} src="imagenes/parking.gif" width={199} height={161} alt="true" /></td>
                        <td colSpan={2}>
                            <img className="living" id="living3"onClick={this.sendToArduinio.bind(this, '#living3')} src="imagenes/living3.gif" width={167} height={33} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={1} height={33} alt="true" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img id="bathroom"onClick={this.sendToArduinio.bind(this, '#bathroom')} src="imagenes/bathroom.gif" width={86} height={122} alt="true" /></td>
                        <td colSpan={2}>
                            <img id="bedroom1"onClick={this.sendToArduinio.bind(this, '#bedroom1')} src="imagenes/bedroom1.gif" width={178} height={122} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={1} height={122} alt="true" /></td>
                    </tr>
                    <tr>
                        <td colSpan={5} rowSpan={2}>
                            <img src="imagenes/SmartHouse_13.gif" width={369} height={179} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={1} height={6} alt="true" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="imagenes/SmartHouse_14.gif" width={199} height={173} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={1} height={173} alt="true" /></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="imagenes/espacio.gif" width={179} height={1} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={199} height={1} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={86} height={1} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={81} height={1} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={97} height={1} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={17} height={1} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={88} height={1} alt="true" /></td>
                        <td>
                            <img src="imagenes/espacio.gif" width={213} height={1} alt="true" /></td>
                        <td />
                    </tr>
                </tbody></table>
        );
    }
}

export default Table;