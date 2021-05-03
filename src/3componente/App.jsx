import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

const name = 'Josh Perez';

function App(props) {
  return <h1>Heasasllo, {props.name}</h1>;
}

export default hot(module)(App);