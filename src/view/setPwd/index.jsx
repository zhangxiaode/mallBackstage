import React, { Component } from 'react';
import './index.less';
import { Form, Icon, Input, Button, message } from 'antd';
const FormItem = Form.Item;

class SetPwd extends Component {
  state = {
    confirmDirty: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success('重置成功');
      } else {
        return false
      }
    });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if(value && !/^[a-zA-Z0-9]{5,17}$/.test(value)){
      callback('密码格式错误!');
    } else if (value && value !== form.getFieldValue('newPassword')) {
      callback('两次输入密码不一致!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirmPassword'], { force: true });
    }
    callback();
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="setPwd">
        <div className="setPwdBg"></div>
        <div className="setPwdCont">
          <div className="logo"></div>
          <div className="tit">密码重置</div>
          <div className="setPwdForm">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入手机号!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入原始密码!' },{
                    pattern: /^[a-zA-Z0-9]{5,17}$/, message: '密码格式错误',
                  }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入原始密码" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('newPassword', {
                  rules: [{ required: true, message: '请输入新密码!' },{
                    pattern: /^[a-zA-Z0-9]{5,17}$/, message: '密码格式错误',
                  },{
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入新密码" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('confirmPassword', {
                  rules: [{ required: true, message: '请输入确认密码!' }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入确认密码" />
                )}
              </FormItem>
              <FormItem style={{ textAlign: 'center' }}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  确定
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
const WrappedNormalSetPwdForm = Form.create()(SetPwd);
export default WrappedNormalSetPwdForm;
