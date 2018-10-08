import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './Test/Welcome';
import './App.css';

import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <Welcome name="Utilisateur"/>
      // <Home/>
    );
  }
}

export default App;
