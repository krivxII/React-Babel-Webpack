import React, { Component} from "react";
import {hot} from "react-hot-loader";


function Prueba(props) {
  return <h1>herman</h1>;
}
function Prueba2(props) {
  return <h1>herman2</h1>;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl  extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.elemento = <Prueba></Prueba>;
    this.state = {isLoggedIn: false, elemento: <Prueba></Prueba>};
  }

  handleLoginClick() {
   
    this.setState({isLoggedIn: true});
    
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        {this.elemento}
        {this.state.elemento}
      </div>
    );
  }
}



export default hot(module)(LoginControl);