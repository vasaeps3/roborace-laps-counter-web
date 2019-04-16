import * as React from 'react';
import { Layout, Button } from 'antd';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import Logo from '../logo/Logo';
import HeaderModal from './HeaderModal';


interface IAppProps { }
interface IAppState {
  visible: boolean;
}

class Header extends React.Component<IAppProps, IAppState> {

  state = {
    visible: false,
  }

  private onModalToggle = (visible: boolean): void => {
    this.setState({
      visible,
    })
  }

  public render() {
    return (
      <Layout.Header>
        <div className="h100 ant-row-flex ant-row-flex-middle ant-row-flex-space-between">
          <Logo />
          <Button
            icon="setting"
            shape="circle"
            onClick={() => this.onModalToggle(true)}></Button>
          <HeaderModal
            visible={this.state.visible}
            toggleModal={this.onModalToggle}></HeaderModal>
        </div>
      </Layout.Header>
    );
  }
}

export default Header;