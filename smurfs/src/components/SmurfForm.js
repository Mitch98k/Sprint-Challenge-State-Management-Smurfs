import React from 'react';
import axios from 'axios';
import {useContext} from 'react';
import {FormContext} from '../contexts/FormContext';
import '../index.css';

class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            smurfName: '',
            SmurfAge: '',
            smurfHeight: ''
        };
    }

handleChanges = e => {
    this.setState({
        smurfName: e.target.value,
        smurfAge: e.target.value,
        smurfHeight: e.target.value
    });
};

    handleSubmit(smurfName, smurfAge, smurfHeight) {
        axios
            .post(
                'http://localhost:3333/smurfs',
                smurfName,
                smurfAge,
                smurfHeight
            )
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className = 'form'>
                    <form onSubmit = {this.handleSubmit}>
                        <input
                        type = "text"
                        name = "smurfName"
                        value = {this.state.smurf}
                        onChange = {this.handleChanges}
                        />
                        <input
                        type = "text"
                        name = "smurfAge"
                        value = {this.state.smurf}
                        onChange = {this.handleChanges}
                        />
                        <input
                        type = "text"
                        name = "smurfHeight"
                        value = {this.state.smurf}
                        onChange = {this.handleChanges}
                        />
                        <button>Create</button>
                    </form>
            </div>
        );
        }
    };

export default SmurfForm;
   