import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteAccess from './Router/RouteAccess.js'

class App extends Component {
  render() {
    return (
      <div className="MenuPrincipal">
        <RouteAccess/>
      </div>
    );
  }
}

export default App;
