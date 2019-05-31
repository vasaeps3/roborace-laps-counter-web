import React, { Component } from 'react';
import { Form, Input, Icon, Button } from 'antd';

import { InputWrapper } from '../../../components/common/input-wrapper/InputWrapper';
import { hashCode } from '../../../utils';


export interface IAppProps { }

class LoginForm extends Component<any, any> {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(err);
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  public render() {
    const validator = (rule, value, callback) => {
      if (!value) {
        callback();
        return;
      }
      console.log(hashCode(value));
      callback('Wrong password');
    }
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <InputWrapper
          form={this.props.form}
          id="password"
          type="password"
          iconType="lock"
          rules={[{
            required: true,
            message: 'Please input your password!',
          },
          {
            validator
          }]} />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: 'login_form' })(LoginForm);