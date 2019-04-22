import React, { FunctionComponent } from 'react';

import { IRobot } from '../../../store/race/interfaces';


interface RobotLapsProps {
  laps: IRobot['laps'];
}

const RobotLaps: FunctionComponent<RobotLapsProps> = (props) => {
  return (
    <div className="race-table-cell laps">{props.laps}</div>
  );
};

export default RobotLaps;