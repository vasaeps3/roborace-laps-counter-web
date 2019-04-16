import { Dispatch } from "redux";

import { IRaceState, IRobot } from "./interfaces";


export const RACE_STATE = 'ROBORACE/STATE';
export const RACE_TIME = 'ROBORACE/TIME';
export const RACE_ROBOT = 'ROBORACE/ROBOT';

export const setRaceState = (status: IRaceState['status'], dispatch: Dispatch) => {
  dispatch({ type: RACE_STATE, status });
}

export const setRaceTime = (time: IRaceState['time'], dispatch: Dispatch) => {
  dispatch({ type: RACE_TIME, time });
}

export const setRobot = (robot: IRobot, dispatch: Dispatch) => {
  dispatch({ type: RACE_ROBOT, robots: [robot] });
}