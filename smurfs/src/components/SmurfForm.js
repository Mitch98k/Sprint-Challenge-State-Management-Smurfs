import React from 'react';
import axios from 'axios';

export class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }
    

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:3333/smurfs', this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    render() {
    return (
        <>
        <form onSubmit = {this.handleSubmit}>
            <input
            type = 'text'
            name = 'name'
            placeholder = 'name'
            value = {this.state.name}
            onChange = {this.handleChanges}
            />
            <input
            type = 'text'
            name = 'age'
            placeholder = 'age'
            value = {this.state.age}
            onChange = {this.handleChanges}
            />
            <input
            type = 'text'
            name = 'height'
            placeholder = 'height'
            value = {this.state.height}
            onChange = {this.handleChanges}
            />
            <button>Add Smurf</button>
        </form>
        </>
    )
}
}
   