import { Reducer, Action } from "redux";

import { RACE_STATE, RACE_TIME, RACE_ROBOT } from "./actions";
import { RaceStatus, IRaceState } from "./interfaces";


const INITIAL_STATE = {
  status: null,
  robots: [],
  time: 0,
}

interface IAction extends Action, IRaceState { }

const raceReducer: Reducer<IRaceState, IAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RACE_STATE:
      return {
        ...state,
        status: action.status,
      }
    case RACE_TIME:
      return {
        ...state,
        time: action.time,
      }
    case RACE_ROBOT:
      const robot = action.robots[0];
      const robots = state.robots;
      const indexRobot = robots.findIndex(r => r.serial === robot.serial);
      if (indexRobot === -1) {
        robots.push(robot)
      } else {
        robots[indexRobot] = robot;
      }
      return {
        ...state,
        robots: [...robots]
      };
    default:
      return state;
  }
}
export default raceReducer;
