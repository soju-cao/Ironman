import React, { Component } from "react";
import { connect } from "react-redux";

import * as Path from 'constants/storePath';
// import style from 'styles/login.scss';
import { withRouter } from "react-router-dom";
import { JSEncrypt } from "jsencrypt";
import { List, InputItem, NavBar, Button, WhiteSpace, Toast } from "antd-mobile";
import { createForm } from 'rc-form';
import { login, getPublicKey } from '../actions/profile';

class Login extends Component {
  constructor (props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.encrypt = this.encrypt.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  async componentDidMount () {
    await this.props.getPublicKey();
  }

  encrypt (password) {
    let encrypt = new JSEncrypt(); // 实例化加密对象
    encrypt.setPublicKey(this.props.publicKey); // 设置公钥
    return encrypt.encrypt(password);// 加密明文
  }

  goBack () {
    this.props.history.goBack();
  }

  onSubmitClick () {
    if (!this.validateForm())
      return;
    let { userName, passWord } = this.props.form.getFieldsValue();

    const { publicKey } = this.props;
    passWord = this.encrypt(passWord);
    this.props.login({ userName, passWord, publicKey });
    // todo get token and save it
    // window.location.reload();
    // localStorage.setItem('name', '123');
    // console.log(localStorage.getItem('name'));
  }

  onRegisterClick () {
    this.props.history.push('/register');
  }

  validateForm () {
    let error;
    this.props.form.validateFields((err) => {
      error = err;
    });

    if (error) {
      for (let key in error) {
        Toast.fail(this.props.form.getFieldError(key), 2);
        return false;
      }
    }

    return true;
  }

  render () {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div>
        <NavBar
          mode="light"
          leftContent="取消"
          onLeftClick={this.goBack}>登录</NavBar>
        <List>
          <InputItem
            {...getFieldProps('userName', {
              rules: [
                { required: true, message: '用户名不能为空' }
              ]
            })}
            clear
            error={!!getFieldError('userName')}
            placeholder="用户名、邮箱或手机号"></InputItem>
          <InputItem
            {...getFieldProps('passWord', {
              rules: [
                { required: true, message: '密码不能为空' }
              ]
            })}
            type="password"
            error={!!getFieldError('passWord')}
            placeholder="输入密码"></InputItem>
          <List.Item>
            <Button type="primary" style={{ color: 'white' }} onClick={this.onSubmitClick}>登录</Button>
            <WhiteSpace />
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
    login: (payload) => dispatch(login(payload)),
    getPublicKey: (payload) => dispatch(getPublicKey(payload))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(Login)));

