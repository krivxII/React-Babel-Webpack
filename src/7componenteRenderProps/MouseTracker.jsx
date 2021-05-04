import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Catt from './cat.jpg';

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src= {Catt} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }
  
  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div>
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
          {this.props.render(this.state)}
        </div>
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
          {this.props.render(this.state)}
        </div>
        </div>
        
        
      );
    }
  }
  
  class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse render={ mouse => ( <Cat mouse={mouse} />)}/>
        </div>
      );
    }
  }

  export default hot(module)(MouseTracker);