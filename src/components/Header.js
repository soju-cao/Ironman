import React, { Component } from "react";
import * as headerStyle from './style/header.scss';

class Header extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className={headerStyle.headerTitle}>
        {this.props.title}
      </div>
    );
  }
}

export default Header;
