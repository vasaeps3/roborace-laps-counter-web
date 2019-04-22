import React, { FunctionComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { IRaceState } from '../../../store/race/interfaces';


interface IAppProps {
  status: IRaceState['status'];
}

const RaceState: FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="laps-counter-info">
      <div className="title">State:</div>
      <div className="value">{props.status || 'NOT CONNECTED'}</div>
    </div>
  );
};


const mapStateToProps = (state: any) => ({ status: state.race.status });
export default connect(mapStateToProps)(RaceState);