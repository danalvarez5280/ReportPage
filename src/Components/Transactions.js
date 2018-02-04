import React, { Component } from "react";

import "./ComponentStyles.css";

class TransactionPage extends Component {
  constructor(props) {
    super();
    this.state = { transactions: props.userHistory };
  };

  displayTransactions() {
    const history = this.state.transactions.map((elem, index) => {
      const profit = elem.costAtSale - elem.costAtPurchase;
      return <div>
          {elem.name}
          <div>
            <p>Date Purchased:</p>
            <p>{elem.datePurchased}</p>
            <p>Cost At Purchase:</p>
            <p>{elem.costAtPurchase}</p>
          </div>
          <div>
            <p>Date Sold:</p>
            <p>{elem.dateSold}</p>
            <p>Cost At Sale:</p>
            <p>{elem.costAtSale}</p>
          </div>
          <div>
            <p>Profit/Loss</p>
            <p>{profit}</p>
          </div>
        </div>;
    });
    return history
  };

  render() {
    console.log("transaction page", this.state);
    const userTransactions = this.displayTransactions()
    return (
      <div className="user-page">
        {userTransactions}
      </div>
    );
  }
}

export default TransactionPage;
