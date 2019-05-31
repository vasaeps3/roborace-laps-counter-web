import React, { FunctionComponent } from 'react';

import { IRobot } from '../../../../store/race/interfaces';


interface RobotSerialProps {
  robot: IRobot;
}

const RobotName: FunctionComponent<RobotSerialProps> = (props) => {
  const { robot } = props;
  return (
    <div className="race-table-cell name">
      <div className="robot-name">
        <div>
          {robot.name}
        </div>
      </div>
    </div>
  );
};

export default RobotName;