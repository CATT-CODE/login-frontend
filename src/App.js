import React, { Component } from 'react';
import MainRouter from './MainRouter';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default class App extends Component {
  state = {
    user: null,
  };

  handleUserLogin = (user) => {
    this.setState({
      user: {
        email: user.email,
      },
    });
  };


  render() {
    return (
      <div>
        <ToastContainer/>
        <MainRouter user={this.state.user}/>
      </div>
    )
  }
}
