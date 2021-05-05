import React, { Component} from "react";
import {hot} from "react-hot-loader";

  class Clase extends React.Component {
    render() {
      return (
        <div>
          <h1>Componente Clase</h1>
        </div>
      );
    }
  }

  export default hot(module)(Clase);