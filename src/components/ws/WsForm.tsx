import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Icon } from 'antd';

import { EnumSocketStatus } from '../../utils/enums/socketEnums';


class WsFormWrap extends Component<any, any> {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="ant-row ant-form-item">
          <div className="ant-col ant-form-item-control-wrapper">
            <div className="ant-form-item-control">
              <span className="ant-form-item-children">
                <span className="ant-input-affix-wrapper">
                  <span className="ant-input-prefix">
                    <Icon type="login" />
                  </span>
                  <Field
                    name="wsUrl"
                    component="input"
                    type="text"
                    className="ant-input"
                    disabled={this.props.socketState.status === EnumSocketStatus.Connected || this.props.socketState.status === EnumSocketStatus.Connecting}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const reduxFormConnect = reduxForm({ form: 'wsForm', onSubmit: () => ({}) })(WsFormWrap);
const mapStateToProps = (state: any) => ({ initialValues: state.initialFormData.wsForm, socketState: state.socketState });

const WsForm = connect(mapStateToProps)(reduxFormConnect);

export default WsForm;