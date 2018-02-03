import React, { Component } from "react";

class IndividualPage extends Component {
  constructor(props) {
    super();
    this.state = { user: props.currentUser };
  }
  render() {
    console.log('user page', this.state)
    return (
      <div className="user-page">
        <div>{this.state.user.name}</div>
      </div>
    );
  }
}

export default IndividualPage;
