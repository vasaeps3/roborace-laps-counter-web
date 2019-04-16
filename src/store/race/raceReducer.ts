import { Reducer, AnyAction } from "redux";

import { IRaceState } from "../../utils/models/raceModels";
import { EnumRaceState } from "../../utils/enums/raceEnum";
import { RACE_STATE } from "./raceActions";


const INITIAL_STATE = {
  state: EnumRaceState.READY,
  robots: [],
}

interface IAction extends AnyAction {
  payload: IRaceState,
}

const raceReducer: Reducer<IRaceState, IAction> = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case RACE_STATE:
      return {
        ...state,
        state: payload.state,
      }
    default:
      return state;
  }
}
export default raceReducer;
