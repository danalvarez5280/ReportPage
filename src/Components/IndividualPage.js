import React, { Component } from "react";
import TransactionPage from './Transactions';

class IndividualPage extends Component {
  constructor(props) {
    super();
    this.state = { user: props.currentUser };
  }

  displayTransactions() {
    const history = this.state.user.transactionHistory.map((elem, index) => {
      const profit = elem.costAtSale - elem.costAtPurchase;
      return (
        <div className="individual-transaction">
          {elem.name}
          <div>
            <p>{elem.datePurchased}</p>
            <p>{elem.costAtPurchase}</p>
          </div>
          <div>
            <p>{elem.dateSold}</p>
            <p>{elem.costAtSale}</p>
          </div>
          <div>
            <p>Profit/Loss</p>
            <p>{profit}</p>
          </div>
        </div>
      );
    });
    return history;
  };
  render() {
    console.log("user page", this.state);
    const userHistory = this.displayTransactions();

    return (
      <div className="user-page">
        <div>User Name:{this.state.user.name}</div>
        <div>Account No:{this.state.user.accountId}</div>
        <div>Available Funds:{this.state.user.currentFunds}</div>
        <div>Funds on Hold:{this.state.user.onHold}</div>
        <div>
          {userHistory}
        </div>
      </div>
    );
  }
}

export default IndividualPage;
