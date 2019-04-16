import { Dispatch } from "redux";

import { IRaceState } from "../../utils/models/raceModels";


export const RACE_STATE = 'ROBORACE/STATE';

export const setRaceState = (state: IRaceState, dispatch: Dispatch) => {
    dispatch({ type: RACE_STATE, payload: state });
}