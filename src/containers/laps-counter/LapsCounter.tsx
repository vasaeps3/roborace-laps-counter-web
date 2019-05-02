import * as React from 'react';
import { connect } from 'react-redux';

import './LapsCounter.scss';
import { IRaceState } from '../../store/race/interfaces';
import { ISocketState } from '../../store/socket/interfaces';
import RaceInfo from '../../components/pages/laps-counter/race-info/RaceInfo';
import RaceTable from '../../components/pages/laps-counter/race-table/RaceTable';


export interface IAppProps {
  socketState: ISocketState,
  race: IRaceState,
}
export interface IAppState { }

class LapsCounter extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <div className="laps-counter">
        <RaceInfo socketState={this.props.socketState} race={this.props.race} />
        <RaceTable robots={this.props.race.robots} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  socketState: state.socketState,
  race: state.race,
});

export default connect(
  mapStateToProps,
)(LapsCounter)