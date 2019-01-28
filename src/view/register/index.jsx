import React, { Component } from 'react';
import './index.less';
import { Form, Input, Select, Row, Col, Checkbox, Button, Steps, message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const Step = Steps.Step;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    step: 0,
    regForm: {
      nickname: '',
      phone: '',
      captcha: '',
      email: '',
      password: '',
      confirm: ''
    }
  };

  next = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        message.success('验证成功');
        this.setState({ step: this.state.step + 1 });
      } else {
        return false
      }
    });
  }

  prev = (e) => {
    e.preventDefault();
    this.setState({ step: this.state.step - 1 });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        message.success('注册成功');
        this.setState({ step: this.state.step + 1 });
      } else {
        return false
      }
    });
  }

  goLog = (e) => {
    e.preventDefault();
    this.props.history.push('/login');
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if(value && !/^[a-zA-Z0-9]{5,17}$/.test(value)){
      callback('密码格式错误!');
    } else if (value && value !== form.getFieldValue('password')) {
      callback('两次输入密码不一致!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  changeInput = (event) => {
    const data=this.state.regForm;
    data[event.target.id] = event.target.value;
    this.setState({regForm:data});
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 18,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
      </Select>
    );
    let registerForm = null;
    if(this.state.step === 0) {
      registerForm = <Form>
        <FormItem
          {...formItemLayout}
          label="昵称"
        >
          {getFieldDecorator('nickname', {
            rules: [{
              required: true, message: '昵称不能为空!', whitespace: true 
            }],
          })(
            <Input onChange={this.changeInput} placeholder="请输入昵称" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="手机号"
        >
          {getFieldDecorator('phone', {
            rules: [{ 
              required: true, message: '手机号不能为空!' 
            },
            {
              pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, message: '手机号格式错误',
            }],
          })(
            <Input onChange={this.changeInput} addonBefore={prefixSelector} placeholder="请输入手机号" style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="验证码"
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '验证码不能为空!' }],
              })(
                <Input onChange={this.changeInput} placeholder="请输入验证码" />
              )}
            </Col>
            <Col span={12}>
              <Button>发送验证码</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="button" onClick={this.next}>下一步</Button>
        </FormItem>
      </Form>
    } else if(this.state.step === 1) {
      registerForm = <Form>
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [ {
              required: true, message: '邮箱地址不能为空!',
            }, {
              type: 'email', message: '邮箱格式错误!',
            }],
          })(
            <Input onChange={this.changeInput} placeholder="请输入邮箱地址"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '密码不能为空!',
            }, {
              pattern: /^[a-zA-Z0-9]{5,17}$/, message: '密码格式错误',
            },{
              validator: this.validateToNextPassword,
            }],
          })(
            <Input onChange={this.changeInput} type="password" placeholder="请输入6-18位字母、数字或下划线" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '密码不能为空!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input onChange={this.changeInput} type="password" placeholder="请再次输入密码" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>我已经阅读<a href="">注册协议</a></Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="button" onClick={this.prev}>上一步</Button>
          <Button type="primary" htmlType="button" onClick={this.handleSubmit}>注册</Button>
        </FormItem>
      </Form>
    } else {
      registerForm = <Form>
        <Button type="primary" className="logBtn" htmlType="button" onClick={this.goLog}>登录</Button>
      </Form>
    }
    return (
      <div className="register">
        <div className="registerBg"></div>
        <div className="registerCont">
          <div className="logo"></div>
          <Steps current={this.state.step} size="small">
            <Step title="手机号验证" />
            <Step title="密码设置" />
            <Step title="注册成功" />
          </Steps>
          <div className="registerForm">
            {registerForm}
          </div>
        </div>
      </div>
    );
  }
}
const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm;
