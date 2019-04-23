import * as React from 'react';
import Title from 'antd/lib/typography/Title';

import './LapsCounter.scss';
import RaceTable from '../race/race-table/RaceTable';
import RaceInfo from '../race/race-info/RaceInfo';


export interface IAppProps { }
export interface IAppState { }

export default class LapsCounter extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <div className="laps-counter">
        <Title level={1}>Roborace Laps Counter</Title>
        <RaceInfo />
        <RaceTable />
      </div>
    );
  }
}
