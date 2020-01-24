import React, { Component } from "react";
import axios from 'axios';
import SmurfForm from './SmurfForm';
import "./App.css";
class App extends Component {

  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({smurfs: res.data});
      console.log(res);
    })
    .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <p>name: {this.state.smurfs.map(smurf => smurf.name)}</p>
        <p>age: {this.state.smurfs.map(smurf => smurf.age)}</p>
        <p>height: {this.state.smurfs.map(smurf => smurf.height)}</p>
        <SmurfForm />
      </div>
    );
  }
}

export default App;
