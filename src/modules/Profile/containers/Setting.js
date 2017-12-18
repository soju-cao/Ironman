import React, { Component } from "react";
import { WhiteSpace, Icon, List } from "antd-mobile";
import { Header } from 'components';

class Setting extends Component {
  constructor () {
    super();
    this.onLogOutClick = this.onLogOutClick.bind(this);
  }

  onLogOutClick () {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    this.props.history.push('/profile');
  }

  render () {
    return (
      <div>
        <Header title="我的"/>
        <WhiteSpace size="lg" />
        <List>
          <List.Item
            thumb={<Icon type="setting" size="md"/>}
            onClick={this.onLogOutClick}
            arrow="horizontal">
            退出登录
          </List.Item>

        </List>
        <WhiteSpace size="xl"/>
      </div>
    );
  }
}

export default Setting;
