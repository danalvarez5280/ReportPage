import React, { Component } from "react";

import './ComponentStyles.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      accounts: [],
      showAccounts: false,
    };
    this.displayAccounts = this.displayAccounts.bind(this);
  };

  componentDidMount() {
    //this is where we would do the fetch call to tha api to get the actual account info
    const mockUserInfo = [
      {
        name: "User 1",
        accountId: 123456789,
        currentFunds: 100000,
        onHold: 10000
      },
      {
        name: "User 2",
        accountId: 234567891,
        currentFunds: 110000,
        onHold: 11000
      },
      {
        name: "User 3",
        accountId: 345678912,
        currentFunds: 120000,
        onHold: 12000
      },
      {
        name: "User 4",
        accountId: 456789123,
        currentFunds: 130000,
        onHold: 13000
      }
    ];
    this.setState({
      accounts: mockUserInfo
    });
  }

  displayAccounts(value) {
    console.log('boolean value', value)
    if(!value) {
      const accountOptions = this.state.accounts.map((elem, index) => {
        return <div key={index} className="account-option">{elem.name}</div>;
      });

      return accountOptions;
    };
    
    // this.setState({
    //   showAccounts: false,
    // });
    
  }

  render() {
    console.log("header page", this.state);
    const accounts = this.displayAccounts();
    const {showAccounts} = this.state;
    return (
      <div className="header">
        <div className="account-info">
          <p>User Name/Id</p>
          <p>Available Funds</p>
          <p>On Hold</p>
        </div>
        <div className="accounts">
          <div 
            className="toggle-account-display account-option"
            onClick={ () => this.displayAccounts(showAccounts)}>Choose Another Account</div>
          {accounts}
        </div>
      </div>
    );
  }
};

export default Header;
