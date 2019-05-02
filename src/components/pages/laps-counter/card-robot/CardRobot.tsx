import * as React from 'react';

import './CardRobot.scss'
import { IRobot } from '../../../../store/race/interfaces';
import RobotPlace from './RobotPlace';
import RobotSerial from './RobotSerial';
import RobotLaps from './RobotLaps';
import RobotTime from './RobotTime';


export interface IAppProps {
  robot: IRobot;
}

export class CardRobot extends React.Component<IAppProps> {
  render() {
    const { robot } = this.props;
    return (
      <div className="card-robot race-table-row" >
        <RobotPlace place={robot.place} />
        {/* <div className="race-table-cell num"># {robot.num}</div> */}
        <RobotSerial robot={robot} />
        <RobotLaps laps={robot.laps} />
        <RobotTime time={robot.time} />
      </div>
    );
  }
}
