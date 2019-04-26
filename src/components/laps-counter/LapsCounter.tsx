import * as React from 'react';

import './LapsCounter.scss';
import RaceTable from '../race/race-table/RaceTable';
import RaceInfo from '../race/race-info/RaceInfo';


export interface IAppProps { }
export interface IAppState { }

export default class LapsCounter extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <div className="laps-counter">
        <RaceInfo />
        <RaceTable />
      </div>
    );
  }
}
