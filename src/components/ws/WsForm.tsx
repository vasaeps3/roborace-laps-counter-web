import React, { Component, FormEvent, Fragment } from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';

import { loadInitWsData } from '../../store/actions';


const initialData = {
  wsUrl: 'ws://192.168.1.200',
}

class WsFormWrap extends Component<any, any> {

  componentDidMount() {
    this.props.loadInitWsData(initialData);
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <Field
            name="wsUrl"
            component="input"
            type="text"
          />
        </form>
      </Fragment>
    );
  }
}

const reduxFormConnect = reduxForm({ form: 'wsForm' })(WsFormWrap);

const mapStateToProps = (state: any) => ({ initialValues: state.initialFormData.wsForm });
const mapDispatchToProps = { loadInitWsData };

let WsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxFormConnect)

export default WsForm;