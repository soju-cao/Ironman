import React, { Component } from "react";
import { Icon, List, NavBar, Card } from "antd-mobile";

// import profile from "styles/profile.scss";
import { withRouter } from "react-router-dom";

class PersonalDetail extends Component {
  constructor () {
    super();
    this.onGoBack = this.onGoBack.bind(this);
  }

  onGoBack () {
    this.props.history.push('/profile');
  }

  render () {
    const userName = localStorage.getItem('userName');
    return (
      <div>
        <NavBar
          mode="light"
          onLeftClick={this.onGoBack}>{userName}</NavBar>
        <Card>
          <Card.Header
            title="todo"
            thumb=""
            extra={<span>this is extra</span>}/>
          <Card.Body>
            <div>This is content of `Card`</div>
          </Card.Body>
          <Card.Footer content="todo" extra={<div>todo</div>} />
        </Card>
        <List>
          <List.Item
            thumb={<Icon type="login" size="lg"/>}
            arrow="horizontal">
          </List.Item>
        </List>
      </div>
    );
  }
}

export default withRouter(PersonalDetail);
