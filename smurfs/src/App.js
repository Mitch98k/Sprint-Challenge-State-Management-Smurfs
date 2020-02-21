import React, {useState, createContext} from 'react';
import axios from 'axios';
import "./App.css";

import {SmurfList} from './components/SmurfList';
import {SmurfForm} from './components/SmurfForm';

export const SmurfContext = createContext();

const App = () => {
  const [smurfData, setSmurfData] = useState([]);

  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
        setSmurfData(res.data)         })
  .catch(err => console.log(err))

return (
    <div className = 'App'>
    <SmurfContext.Provider value={smurfData}>
        <SmurfList />
        <SmurfForm />
    </SmurfContext.Provider>
    </div>
)
};
export default App; 
