import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      accounts: [],
    };
  };


  displayAccounts() {
    const accountOptions = this.state.accounts.map((elem, index) => {
      return <div>{elem.name}</div>
    })
  }

  render() {
    return (
      <div className="header">
        <div className="account-info">
          <p>User Name/Id</p>
          <p>Available Funds</p>
          <p>On Hold</p>
        </div>
        <div className="accounts">

        </div>
      </div>
    )
  };
};

export default Header;
