import React, { Component } from 'react';
// i have router installed but this doesn't seem like it need to be used for this site
// import { Route, NavLink, Link } from "react-router-dom";

import Home from './Components/Home';
import Header from './Components/Header';
import IndividualPage from './Components/IndividualPage';

import MainContainer from './Containers/MainContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      user: {}
    };
    this.selectUser = this.selectUser.bind(this);
  };

// this is if we decide to use redux
  // shouldComponentUpdate(nextProps) {
  //   const user = this.props.currentUser !== nextProps.currentUser;

  //   if (user) {
  //     return true;
  //   }
  //   return false;
  // }

  selectUser(obj) {
    this.setState({
      user: obj
    })
  }

  render() {
    return <div className="App">
        <Header selectUser={this.selectUser} />
        {this.state.user.name === "User 1" && <IndividualPage currentUser={this.state.user} />}
        {this.state.user.name === "User 2" && <IndividualPage currentUser={this.state.user} />}
        {this.state.user.name === "User 3" && <IndividualPage currentUser={this.state.user} />}
        {this.state.user.name === "User 4" && <IndividualPage currentUser={this.state.user} />}
      </div>;
  }
}

export default MainContainer(App);
