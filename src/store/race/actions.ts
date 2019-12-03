import { Dispatch } from "redux";

import { IRaceState, IRobot } from "./interfaces";

export const RACE_STATE = "ROBORACE/STATE";
export const RACE_TIME = "ROBORACE/TIME";
export const RACE_ROBOT = "ROBORACE/ROBOT";
export const REMOVE_ROBOT = "ROBORACE/REMOVE_ROBOT";

export const setRaceState = (
  status: IRaceState["status"],
  dispatch: Dispatch
) => {
  dispatch({ type: RACE_STATE, status });
};

export const setRaceTime = (time: IRaceState["time"], dispatch: Dispatch) => {
  dispatch({ type: RACE_TIME, time });
};

export const setRobot = (robot: IRobot, dispatch: Dispatch) => {
  dispatch({ type: RACE_ROBOT, robots: [robot] });
};

export const removeRobor = (serial: IRobot["serial"], dispatch: Dispatch) => {
  dispatch({ type: REMOVE_ROBOT, serial });
};
