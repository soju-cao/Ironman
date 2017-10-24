import React, { Component } from "react";
import { connect } from "react-redux";

import * as Path from 'constants/storePath';
// import style from 'styles/login.scss';
import { withRouter } from "react-router-dom";
import { JSEncrypt } from "jsencrypt";
import { List, InputItem, NavBar, Button, WhiteSpace } from "antd-mobile";
import { createForm } from 'rc-form';
// import { getPublicKey, login} from '../actions/profile';

class Login extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  async handleSubmit (e) {
    e.preventDefault();
    let fromData, error;
    this.props.form.validateFields((err, values) => {
      error = err;
      fromData = values;
    });
    if (error) return;

    const { publicKey } = this.props;
    const passWord = this.encrypt(fromData.passWord);
    const formData = { ...fromData, passWord, publicKey };
    await this.props.login(formData);
    // window.location.reload();
  }

  encrypt (password) {
    const encrypt = new JSEncrypt(); // 实例化加密对象
    encrypt.setPublicKey(this.props.publicKey); // 设置公钥
    return encrypt.encrypt(password);// 加密明文
  }

  goBack () {
    this.props.history.goBack();
  }

  onRegisterClick () {
    this.props.history.push('/register');
  }

  render () {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <NavBar
          mode="light"
          leftContent="取消"
          onLeftClick={this.goBack}>登录</NavBar>
        <List>
          <InputItem
            {...getFieldProps('userName')}
            clear
            placeholder="用户名、邮箱或手机号"></InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="密码"></InputItem>
          <List.Item>
            <Button type="primary" style={{ color: 'white' }}>登录</Button><WhiteSpace />
            <div style={{ width: '100%', color: '#108ee9', textAlign: 'center' }} onClick={this.onRegisterClick}>
              没有账号？马上注册一个
            </div>
          </List.Item>
        </List>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const appStorePath = ['app', Path.LOGIN_REDUCER];
  return {
    publicKey: state.getIn([...appStorePath, Path.PUBLIC_KEY])
  };
}

function mapDispatchToProps (dispatch) {
  return {
    // login: (payload) => dispatch(login(payload))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(Login)));

