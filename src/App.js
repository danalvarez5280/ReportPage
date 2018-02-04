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
      accounts: [],
      user: {},
    };
    this.selectUser = this.selectUser.bind(this);
  }

  componentWillMount() {
    //this is where we would do the fetch call to tha api to get the actual account info
    const mockUserInfo = [
      {
        name: "User 1",
        accountId: 123456789,
        currentFunds: 100000,
        onHold: 10000,
        transactionHistory: [
          {name: "BitCoin", datePurchased: "Jan 1st, 2018", costAtPurchase: 14000, dateSold: "Jan 15th, 2018", costAtSale: 14100},
          {name: "Marvel", datePurchased: "Jan 1st, 2018", costAtPurchase: 1000, dateSold: "Jan 18th, 2018", costAtSale: 2100},
          {name: "Trump", datePurchased: "Jan 1st, 2017", costAtPurchase: 1000, dateSold: "Jan 31st, 2018", costAtSale: 1},
        ]
      },
      {
        name: "User 2",
        accountId: 234567891,
        currentFunds: 110000,
        onHold: 11000,
        transactionHistory: [
          {name: "BitCoin", datePurchased: "Jan 1st, 2018", costAtPurchase: 14000, dateSold: "Jan 15th, 2018", costAtSale: 14100},
          {name: "Marvel", datePurchased: "Jan 1st, 2018", costAtPurchase: 1000, dateSold: "Jan 18th, 2018", costAtSale: 2100},
          {name: "Trump", datePurchased: "Jan 1st, 2017", costAtPurchase: 1000, dateSold: "Jan 31st, 2018", costAtSale: 1},
        ]
      },
      {
        name: "User 3",
        accountId: 345678912,
        currentFunds: 120000,
        onHold: 12000,
        transactionHistory: [
          {name: "BitCoin", datePurchased: "Jan 1st, 2018", costAtPurchase: 14000, dateSold: "Jan 15th, 2018", costAtSale: 14100},
          {name: "Marvel Stock", datePurchased: "Jan 1st, 2018", costAtPurchase: 1000, dateSold: "Jan 18th, 2018", costAtSale: 2100},
          {name: "Trump Stock", datePurchased: "Jan 1st, 2017", costAtPurchase: 1000, dateSold: "Jan 31st, 2018", costAtSale: 1},
        ]
      },
      {
        name: "User 4",
        accountId: 456789123,
        currentFunds: 130000,
        onHold: 13000,
        transactionHistory: [
          {name: "BitCoin", datePurchased: "Jan 1st, 2018", costAtPurchase: 14000, dateSold: "Jan 15th, 2018", costAtSale: 14100},
          {name: "Marvel", datePurchased: "Jan 1st, 2018", costAtPurchase: 1000, dateSold: "Jan 18th, 2018", costAtSale: 2100},
          {name: "Trump", datePurchased: "Jan 1st, 2017", costAtPurchase: 1000, dateSold: "Jan 31st, 2018", costAtSale: 1},
        ]
      }
    ];
    this.setState({
      accounts: mockUserInfo
    });
  }

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
    });
  }

  render() {
    return (
      <div className="App">
        <Header accountsInfo={this.state.accounts} selectUser={this.selectUser} />
        {this.state.user.name === "User 1" && (
          <IndividualPage currentUser={this.state.user} />
        )}
        {this.state.user.name === "User 2" && (
          <IndividualPage currentUser={this.state.user} />
        )}
        {this.state.user.name === "User 3" && (
          <IndividualPage currentUser={this.state.user} />
        )}
        {this.state.user.name === "User 4" && (
          <IndividualPage currentUser={this.state.user} />
        )}
      </div>
    );
  }
}

export default MainContainer(App);
