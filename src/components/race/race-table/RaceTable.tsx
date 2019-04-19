import React, { FunctionComponent } from 'react';
import FlipMove from 'react-flip-move';
import { connect } from 'react-redux';
import { cmp } from 'type-comparator';

import { CardRobot } from '../card-robot/CardRobot';
import { IRobot } from '../../../store/race/interfaces';


interface IAppProps {
  robots: IRobot[];
}

const RaceTable: FunctionComponent<IAppProps> = (props) => {
  const { robots } = props;

  const comparator = cmp().map(r => r.place).desc();

  const robotsCards = (robots.sort(comparator).map(robot => (
    <CardRobot key={robot.serial} robot={robot} />
  )))

  console.log('render');

  return (
    <div className="race-table">
      <div className="race-table-header">
        <div className="race-table-row">
          <div className="race-table-cell num">robot.num</div>
          <div className="race-table-cell serial">robot.serial</div>
          <div className="race-table-cell place">robot.place</div>
          <div className="race-table-cell laps">robot.laps</div>
          <div className="race-table-cell time">robot.time</div>
        </div>
      </div>
      <FlipMove className="race-table-body">
        {robotsCards}
      </FlipMove>
    </div >
  );
};


const mapStateToProps = (state: any) => ({ robots: state.race.robots });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(RaceTable)
// export default RaceTable;