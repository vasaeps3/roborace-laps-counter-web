import * as React from 'react';
import { Modal, Button } from 'antd';

import WsContainer from '../ws/WsContainer';


export interface IAppProps {
  visible: boolean;
  toggleModal: (visible: boolean) => void;
}

export interface IAppState {
  loading: boolean;
}

export default class HeaderModal extends React.Component<IAppProps, IAppState> {

  public state = {
    loading: false,
  }

  private connectWS = (visible: boolean) => {
    this.setState({ loading: true });
    // this.props.toggleModal(visible)
  }

  private closeModal = () => {
    this.setState({ loading: false });
    this.props.toggleModal(false);
  }

  public render() {
    const { loading } = this.state;
    return (
      <Modal
        title="Basic Modal"
        visible={this.props.visible}
        onOk={() => this.connectWS(false)}
        onCancel={this.closeModal}
        footer={[
          <Button key="back" onClick={this.closeModal}>Close</Button>,
          <Button key="submit" type="primary" loading={loading} onClick={() => this.connectWS(false)}>
            Connect
          </Button>,
        ]}
      >
        <WsContainer />
      </Modal >
    );
  }
}
