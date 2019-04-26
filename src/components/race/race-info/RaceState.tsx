import React, { FunctionComponent, Fragment } from 'react';

import { IRaceState } from '../../../store/race/interfaces';


interface IAppProps {
  status: IRaceState['status'];
}

const RaceState: FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="laps-counter-info">
      <div className="title">Race state:</div>
      <div className="value">{props.status || 'NOT CONNECTED'}</div>
    </div>
  );
};

export default RaceState;