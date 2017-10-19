import React, { Component } from "react";
import { routes } from '../routes';
// import { Link } from 'react-router-dom';
export default class App extends Component {
  render () {
    return (
      <div>
        { routes }
      </div>
    );
  }
}
