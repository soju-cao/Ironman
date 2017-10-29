import React, { Component } from "react";
import { connect } from "react-redux";

import * as Path from 'constants/storePath';
// import style from 'styles/login.scss';
import { withRouter } from "react-router-dom";
import { JSEncrypt } from "jsencrypt";
import { List, InputItem, NavBar, Button, WhiteSpace, Toast } from "antd-mobile";
import { createForm } from 'rc-form';
import { register, getPublicKey } from '../actions/profile';

class Register extends Component {
  constructor (props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.encrypt = this.encrypt.bind(this);
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
    let { userName, passWord, confirmPassword } = this.props.form.getFieldsValue();
    if (passWord !== confirmPassword) {
      Toast.fail('两次密码不相同', 2);
    }

    const { publicKey } = this.props;
    passWord = this.encrypt(passWord);
    this.props.register({ userName, passWord, publicKey });
    // todo get token and save it
    // window.location.reload();
    // localStorage.setItem('name', '123');
    // console.log(localStorage.getItem('name'));
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
          <InputItem
            {...getFieldProps('confirmPassword', {
              rules: [
                { required: true, message: '密码不能为空' }
              ]
            })}
            error={!!getFieldError('confirmPassword')}
            type="password"
            placeholder="再次输入密码"></InputItem>
          <List.Item>
            <Button type="primary" style={{ color: 'white' }} onClick={this.onSubmitClick}>注册</Button>
            <WhiteSpace />
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
    register: (payload) => dispatch(register(payload)),
    getPublicKey: (payload) => dispatch(getPublicKey(payload))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(Register)));

