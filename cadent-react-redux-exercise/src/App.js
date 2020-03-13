import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './components/ListContainer'

//   To get started, edit <code>src/App.js</code> and save to reload.
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cadent Grocery App</h1>
        </header>
        <p className="App-intro">
       
        </p>
       <ListContainer />
      </div>
    );
  }
}

export default App;
