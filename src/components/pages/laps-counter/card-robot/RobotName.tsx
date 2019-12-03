import React, { FunctionComponent, Component, PureComponent } from "react";
import { Form, Button } from "antd";

import { IRobot } from "../../../../store/race/interfaces";
import { InputWrapper } from "../../../common/input-wrapper/InputWrapper";
import { connect } from "react-redux";
import { sendMessage } from "../../../../store/socket/actions";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

interface RobotSerialProps {
  robot: IRobot;
}
class RobotName extends PureComponent<RobotSerialProps, any> {
  state = { isAdmin: false };
  componentDidMount() {
    const pass = localStorage.getItem("pass") || "";

    this.setState({ isAdmin: pass === "-544719056" });
  }

  public render() {
    const { robot } = this.props;
    const content = this.state.isAdmin ? (
      <RobotNameAdminForm robot={robot} />
    ) : (
      <RobotNameUser robot={robot} />
    );

    return <div className="race-table-cell name">{content}</div>;
  }
}

export default RobotName;

const RobotNameUser: FunctionComponent<RobotSerialProps> = props => {
  const { robot } = props;
  return (
    <div className="robot-name">
      <div>{robot.name}</div>
    </div>
  );
};

class RobotNameAdmin extends PureComponent<any> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.sendMessage({
          name: values.name,
          serial: this.props.robot.serial,
          type: "ROBOT_EDIT"
        });
      }
    });
  };
  public render() {
    const { getFieldsError } = this.props.form;

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <InputWrapper
          form={this.props.form}
          id="name"
          type="name"
          iconType="copy"
          rules={[
            {
              required: true,
              message: "Please enter name"
            }
          ]}
        />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const mapDispatchToProps: any = {
  sendMessage
};

const RobotNameAdminForm = connect<any>(
  null,
  mapDispatchToProps
)(
  Form.create<any>({
    name: "edit_name",
    mapPropsToFields(props) {
      return {
        name: Form.createFormField({
          ...props.name,
          value: props.robot.name
        })
      };
    }
  })(RobotNameAdmin)
);
