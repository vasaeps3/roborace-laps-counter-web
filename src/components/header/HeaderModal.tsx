import * as React from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';

import WsContainer from '../ws/WsContainer';
import { submitWS } from '../../store/initData/actions';
import { EnumSocketStatus } from '../../utils/enums/socketEnums';
import { disconnectSocket, connectSocket } from '../../store/socket/socketActions';
import { ISocketState } from '../../utils/models/socketModels';


export interface IAppProps {
  visible: boolean;
  toggleModal: (visible: boolean) => void;
  submitWS: () => void;
  socketState: ISocketState;
  connectSocket: (wsURL: string) => void;
  disconnectSocket: () => void;
}

export interface IAppState { }

class HeaderModal extends React.Component<IAppProps, IAppState> {
  private connectFromButton = () => {
    this.props.submitWS();
  }
  private disconnectButton = () => {
    this.props.disconnectSocket();
  }
  private closeModal = () => {
    this.props.toggleModal(false);
  }
  private connectFromSubmit = (wsURL: string) => {
    this.props.connectSocket(wsURL);
  }

  get loading() {
    return this.props.socketState.status === EnumSocketStatus.Connecting;
  }

  public render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.props.visible}
        onCancel={this.closeModal}
        footer={[
          <Button key="back" onClick={this.closeModal}>Close</Button>,
          this.props.socketState.status === EnumSocketStatus.Connected
            ? <Button key="submit" type="primary" loading={this.loading} onClick={() => this.disconnectButton()}>Disconnect</Button>
            : <Button key="submit" type="primary" loading={this.loading} onClick={() => this.connectFromButton()}>Connect</Button>
        ]}
      >
        <WsContainer connectFromSubmit={this.connectFromSubmit} />
      </Modal >
    );
  }
}

const mapStateToProps = (state: any) => ({ socketState: state.socketState })
const mapDispatchToProps = { connectSocket, disconnectSocket, submitWS };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderModal)


