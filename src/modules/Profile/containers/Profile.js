import React, { Component } from "react";
import { WhiteSpace, Icon, List } from "antd-mobile";

// import profile from "styles/profile.scss";
import { withRouter } from "react-router-dom";
import Header from "components/Header";

class Profile extends Component {
  constructor () {
    super();
    this.onLoginOrRegisterClick = this.onLoginOrRegisterClick.bind(this);
    this.onShowPersonalDetailClick = this.onShowPersonalDetailClick.bind(this);
    this.onShowSettingDetailClick = this.onShowSettingDetailClick.bind(this);
  }

  onLoginOrRegisterClick () {
    this.props.history.push('/login');
  }

  onShowPersonalDetailClick () {
    this.props.history.push('/profile/personaldetail');
  }

  onShowSettingDetailClick () {
    this.props.history.push('/profile/setting');
  }

  render () {
    const userName = localStorage.getItem('userName');
    return (
      <div>
        <Header title="我的"/>
        <WhiteSpace size="lg" />
        <List>
          {
            userName ? <List.Item
              thumb={<Icon type="login" size="md"/>}
              onClick={this.onShowPersonalDetailClick}
              arrow="horizontal">
              {userName}
            </List.Item> : <List.Item
              thumb={<Icon type="login" size="md"/>}
              onClick={this.onLoginOrRegisterClick}
              arrow="horizontal">
              登录/注册
            </List.Item>
          }
          <List.Item
            thumb={<Icon type="setting" size="md"/>}
            onClick={this.onShowSettingDetailClick}
            arrow="horizontal">
            设置
          </List.Item>

        </List>
        <WhiteSpace size="xl"/>
      </div>
    );
  }
}

export default withRouter(Profile);
