import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";
//if we use redux we can use the store from the main container
// import MainContainer from '../Containers/MainContainer';

import './ComponentStyles.css';

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      accounts: props.accountsInfo,
      showAccounts: false,
      user: {},
    };
    this.displayAccounts = this.displayAccounts.bind(this);
  };

  selectUser(obj){
    this.props.selectUser(obj);
    this.setState({
      user: obj
    });
  };

  displayAccounts() {
    if(this.state.showAccounts) {
      const accountOptions = this.state.accounts.map((elem, index) => {
        return <div 
                  key={index} 
                  className="account-option"
                  onClick={() => this.selectUser(elem)}>{elem.name}</div>;
      });
      return accountOptions;
    };
  };

  toggleAccount() {
    console.log('boolean value', this.state.showAccounts)
    this.setState({
      showAccounts: !this.state.showAccounts
    })
  };

  render() {
    console.log("header page", this.state);
    const accounts = this.displayAccounts();
    const {showAccounts, user} = this.state;
    const instructionText = showAccounts ? "Cancel" : "Choose Account";
    return <div className="header">
        <div className="account-info">
          <p>Account: {user.accountId}</p>
          <p>Current Funds: {user.currentFunds}</p>
          <p>On Hold: {user.onHold}</p>
        </div>
        <div className="accounts">
          <div className="toggle-account-display account-option" onClick={() => this.toggleAccount()}>
            {instructionText}
          </div>
          <div className="all-accounts">
            {accounts}
          </div>
        </div>
      </div>;
  }
};

export default Header;
