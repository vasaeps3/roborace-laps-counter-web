import * as React from 'react';

import { IRobot } from '../../../../store/race/interfaces';


interface RobotSerialProps {
  robot: IRobot;
}

const RobotSerial: React.FunctionComponent<RobotSerialProps> = (props) => {
  const { robot } = props;
  return (
    <div className="race-table-cell serial">
      <div className="robot-serial">
        <div>
          {robot.serial}
        </div>
      </div>
    </div>
  );
};

export default RobotSerial;