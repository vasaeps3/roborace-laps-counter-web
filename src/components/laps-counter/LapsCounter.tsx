import * as React from 'react';
import Title from 'antd/lib/typography/Title';
import { Row, Col } from 'antd';

import RaceTime from '../race/race-time/RaceTime';
import RaceState from '../race/race-state/RaceState';
import RaceTable from '../race/race-table/RaceTable';
import './LapsCounter.scss';
import { Container } from '../container/Container';

export interface IAppProps { }
export interface IAppState { }

export default class LapsCounter extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <div className="laps-counter">
        <Title level={1}>Roborace Laps Counter</Title>
        <Container gutter={32}>
          <Row gutter={32}>
            <Col sm={24} md={12}>
              <RaceState />
            </Col>
            <Col sm={24} md={12}>
              <RaceTime />
            </Col>
          </Row>
        </Container>
        <RaceTable />
      </div>
    );
  }
}
