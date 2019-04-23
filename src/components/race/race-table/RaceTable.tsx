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
  const comparator = cmp().map(r => r.place).asc();
  const robotsCards = (robots.sort(comparator).map(robot => (
    <CardRobot key={robot.serial} robot={robot} />
  )));

  let tableBody = (
    <FlipMove className="race-table-body">
      {robotsCards}
    </FlipMove>
  );

  if (!robotsCards.length) {
    tableBody = <div className="race-table-body race-table-empty"><div></div></div>
  }

  return (
    <div className="race-table">
      <div className="race-table-header">
        <div className="race-table-row">
          <div className="race-table-cell place">Place</div>
          {/* <div className="race-table-cell num">robot.num</div> */}
          <div className="race-table-cell serial">Serial</div>
          <div className="race-table-cell laps">Laps</div>
          <div className="race-table-cell time">Time</div>
        </div>
      </div>
      {tableBody}
    </div >
  );
};


const mapStateToProps = (state: any) => ({ robots: state.race.robots });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(RaceTable)
// export default RaceTable;