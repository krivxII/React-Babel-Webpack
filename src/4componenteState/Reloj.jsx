import React, { Component} from "react";
import {hot} from "react-hot-loader";


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), count: 0};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
 
  }

  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  

   tick() {
    this.setState((state, props) => ({
      date: new Date(),
      count: state.count+1
    }));
  }



  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}


export default hot(module)(Toggle);