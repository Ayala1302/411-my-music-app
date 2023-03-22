import React, { Component } from "react";

// import { createTheme } from "@mui/material/styles";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


// Add a property called loggedIn to your state that has a Boolean value.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      online: false,
      volume: 20,
      quality: 2,
      // notifications: [],
    };
  }

  render() {
    if (this.state.loggedIn) {
      return <Dashboard />;
    } else {
      return (
        // the code for your login screen
        <Login loggedIn={this.state.loggedIn}
        handleLogin={this.handleLogin} />
      );
    }
  }
  
  
  
  // ****Functionality for music app****


  // handleNotifications = () => {
  //   if (this.state.online === true) {
  //     this.setState({
  //       notifications: [...this.state.notifications, "Online"],
  //     });
  //   } else {
  //     this.setState({
  //       notifications: [...this.state.notifications, "Your application is offline. You won't be able to share or stream music to other devices."],
  //     });
  //   }
  //   if (this.state.volume > 80) {
  //     this.setState({
  //       notifications: [...this.state.notifications, "Listening to music at a high volume could cause long-term hearing loss."],
  //     });
  //   }
  //   if (this.state.quality === 1) {
  //     this.setState({
  //       notifications: [...this.state.notifications, "Music quality is degraded. Increase quality if your connection allows it."],
  //     });
  //   }
  // };

  // componentDidUpdate = () => {
  //   if (this.state.online === true) {
  //     this.setState({
  //       notifications: [...this.state.notifications, "Online"],
  //     });
  //   } else {
  //     this.setState({
  //       notifications: [...this.state.notifications, "Your application is offline. You won't be able to share or stream music to other devices."],
  //     });
  //   }
  //   if (this.state.volume > 80) {
  //     this.setState({
  //       notifications: [...this.state.notifications, "Listening to music at a high volume could cause long-term hearing loss."],
  //     });
  //   }
  //   if (this.state.quality === 1) {
  //     this.setState({
  //       notifications: [...this.state.notifications, "Music quality is degraded. Increase quality if your connection allows it."],
  //     });
  //   }
  // };

  // handleOnline = () => {
  //   this.state.online
  //     ? this.setState({ online: false })
  //     : this.setState({ online: true });
  // };

  // handleVolume = (event, newValue) => {
  //   this.setState({ volume: newValue });
  // };

  // handleQuality = (event) => {
  //   this.setState({ quality: event.target.value });
  // };

  handleLogin = () => {
    this.state.loggedIn
      ? this.setState({ loggedIn: false })
      : this.setState({ loggedIn: true });
  };

}

export default App;
