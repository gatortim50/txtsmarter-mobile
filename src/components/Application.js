import React, { Component } from "react";
import SignUpNavigator from '../navigators/SignUpNavigator'
import LoginNavigator from '../navigators/LoginNavigator'

export default class Application extends Component {
  constructor(props) {
    super(props);
    console.log("Application props:", this.props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <SignUpNavigator/>;
    } else {
      return <LoginNavigator/>;
    }
  }
}


