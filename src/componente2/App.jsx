import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";



const name = 'Josh Perez';

class App extends Component{
 
  
  render(){
    return(
      <div className="App">
        <h1> Hello,  {name} </h1>
      </div>
    );
  }
}

export default hot(module)(App);