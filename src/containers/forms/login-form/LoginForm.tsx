import React, { Component } from "react";
import { Form, Input, Icon, Button } from "antd";
import { withRouter } from "react-router-dom";

import { InputWrapper } from "../../../components/common/input-wrapper/InputWrapper";
import { hashCode } from "../../../utils";

export interface IAppProps {}

class LoginForm extends Component<any, any> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem("pass", "" + hashCode(values.password));
        this.props.history.push("/");
      }
    });
  };

  public render() {
    const validator = (rule, value, callback) => {
      if (!value) {
        callback();
        return;
      }
      const truePassword = "-544719056";
      if ("" + hashCode(value) !== truePassword) {
        callback("Wrong password");
      }

      return true;
    };
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <InputWrapper
          form={this.props.form}
          id="password"
          type="password"
          iconType="lock"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            },
            {
              validator
            }
          ]}
        />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "login_form" })(withRouter(LoginForm));
