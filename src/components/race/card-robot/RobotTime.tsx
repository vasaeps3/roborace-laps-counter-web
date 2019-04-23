import * as React from 'react';

import { msToTime } from '../../../utils';
import { IRobot } from '../../../store/race/interfaces';


interface RobotTimeProps {
  time: IRobot['time']
}

const RobotTime: React.FunctionComponent<RobotTimeProps> = (props) => {


  return (
    <div className="race-table-cell time">{msToTime(props.time)}</div>
  );
};

export default RobotTime;