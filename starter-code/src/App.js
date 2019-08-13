import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Data from './countries.json'
import Main from './components/main/Main'


class App extends Component {
 
  render() {
    // console.log(Data);

    return (
      <div className="App">
        <Main data = { Data }/>
      </div>
    )
  }
}

export default App;
