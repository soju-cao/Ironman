import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import * as Constants from '../../../constants/constants';
import style from 'styles/login.scss';
import { withRouter } from "react-router-dom";
import { JSEncrypt } from "jsencrypt";
import { login } from '../actions/app';

const FormItem = Form.Item;

@Form.create({
  onFieldsChange (props, items) {
    // console.log(items)
    // props.cacheSearch(items);
  },
})

class Login extends Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={style.formContainer}>
        <Form onSubmit={this.handleSubmit} className={style.loginForm}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('passWord', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <a className={style.loginFormForgot} href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className={style.loginFormButton}>
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const appStorePath = ['app', Constants.APP_REDUCER];
  return {
    publicKey: state.getIn([...appStorePath, Constants.PUBLIC_KEY])
  };
}

function mapDispatchToProps (dispatch) {
  return {
    login: (payload) => dispatch(login(payload))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));
