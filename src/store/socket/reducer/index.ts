import { Reducer, AnyAction } from "redux";

import { CONNECTION_CHANGED, PORT_CHANGED } from "../actions";


const INITIAL_STATE = {
  connected: false,
  wsURL: null,
};

const socketReducer: Reducer<any, AnyAction> = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case CONNECTION_CHANGED:
      return {
        ...state,
        connected: action.payload,
        isError: false,
      }

    case PORT_CHANGED:
      return {
        ...state,
        wsURL: action.payload
      }
    default:
      return state;
  }
}
export default socketReducer;

