import React, { Component } from "react";
import { routes } from '../routes';
// import { Link } from 'react-router-dom';
import DevTools from '../containers/DevToolsWindow';
export default class App extends Component {
  render () {
    return (
      <div>
        { routes }
        <DevTools />
      </div>

    );
  }
}
