import * as React from 'react';

import './CardRobot.scss'
import { IRobot } from '../../../store/race/interfaces';


export interface IAppProps {
  robot: IRobot;
}

export class CardRobot extends React.Component<IAppProps> {
  render() {
    const { robot } = this.props;
    return (
      <div className="card-robot race-table-row" >
        <div className="race-table-cell num"># {robot.num}</div>
        <div className="race-table-cell serial">{robot.serial}</div>
        <div className="race-table-cell place">{robot.place}</div>
        <div className="race-table-cell laps">{robot.laps}</div>
        <div className="race-table-cell time">{robot.time}</div>
      </div>
    );
  }
}
