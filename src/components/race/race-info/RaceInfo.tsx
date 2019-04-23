import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import RaceTime from './RaceTime';
import RaceState from './RaceState';
import { Container } from '../../container/Container';
import { ISocketState } from '../../../store/socket/interfaces';
import { IRaceState } from '../../../store/race/interfaces';


export interface IRaceInfoProps {
  socketState: ISocketState,
  race: IRaceState,
}

export interface IRaceInfoState { }

class RaceInfo extends Component<IRaceInfoProps, IRaceInfoState> {

  public render() {
    return (
      <Container gutter={32}>
        <Row gutter={32}>
          <Col sm={24} md={12}>
            <RaceState status={this.props.race.status} />
          </Col>
          <Col sm={24} md={12}>
            <RaceTime socketStatus={this.props.socketState.status} raceStatus={this.props.race.status} raceTime={this.props.race.time} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({ socketState: state.socketState, race: state.race });
export default connect(mapStateToProps)(RaceInfo);