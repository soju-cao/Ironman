import React, { Component } from "react";
import { WhiteSpace, WingBlank, Icon } from "antd-mobile";

import profile from "styles/profile.scss";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  constructor () {
    super();
    this.onLoginOrRegisterClick = this.onLoginOrRegisterClick.bind(this);
  }

  onLoginOrRegisterClick () {
    this.props.history.push('/login');
  }

  render () {
    return (
      <div>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
        <div className={profile.loginRegisterCard} onClick={this.onLoginOrRegisterClick}>
          <div className={profile.loginIcon}>
            <Icon type="login" size="lg"/>
            <WingBlank size="lg" />
            <div>登录/注册</div>
          </div>
          <Icon type="arrow_right" size="md"/>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
