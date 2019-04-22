import * as React from 'react';
import moment from 'moment';

import { IRobot } from '../../../store/race/interfaces';


interface RobotTimeProps {
  time: IRobot['time']
}

const RobotTime: React.FunctionComponent<RobotTimeProps> = (props) => {
  const msToTime = (s: number) => {
    // var now = new Date().getTime();
    // var startTime = new Date().getTime() - s*1000;
    // var timeDiff = moment.duration(now - startTime);

    // var timeMessege = 'Время исследования: ' + timeDiff.hours() + ' м ' + timeDiff.seconds() + ' с';
    // console.log(timeMessege);
    // const ms = s % 1000;
    // //  (ms);
    // const time = moment(s);
    // console.log(time.hours());
    const a = moment(s).format('H[h] mm:ss.ms');
    // console.log(a);
    return a;
  }
  return (
    <div className="race-table-cell time">{msToTime(props.time)}</div>
  );
};

export default RobotTime;