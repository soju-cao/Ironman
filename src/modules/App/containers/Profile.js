import React, { Component } from "react";
import { WhiteSpace, Icon, List } from "antd-mobile";

// import profile from "styles/profile.scss";
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
        <List>
          <List.Item
            thumb={<Icon type="login" size="lg"/>}
            onClick={this.onLoginOrRegisterClick}
            arrow="horizontal">
            登录/注册
          </List.Item>
        </List>
        <WhiteSpace size="xl"/>
      </div>
    );
  }
}

export default withRouter(Profile);
