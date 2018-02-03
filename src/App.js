import React, { Component } from 'react';
import { Route, NavLink, Link } from "react-router-dom";

import Home from './Components/Home';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />       
      </div>
    );
  }
}

export default App;
