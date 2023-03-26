import React, { Component } from "react";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      online: false,
      volume: 20,
      quality: 2,
    };
  }

  render() {
    if (this.state.loggedIn) {
      return <Dashboard />;
    } else {
      return (
        // the code for your login screen
        <Login loggedIn={this.state.loggedIn} handleLogin={this.handleLogin} />
      );
    }
  }

  handleLogin = () => {
    this.state.loggedIn
      ? this.setState({ loggedIn: false })
      : this.setState({ loggedIn: true });
  };
}

export default App;
