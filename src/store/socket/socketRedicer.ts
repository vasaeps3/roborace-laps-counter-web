import { Reducer, AnyAction } from "redux";

import { ISocketState } from "../../utils/models/socketModels";
import { EnumSocketStatus } from "../../utils/enums/socketEnums";
import { CONNECTION_STATE, CONNECT_SOCKET, DISCONNECT_SOCKET } from "./socketActions";


interface IAction extends AnyAction {
  payload: ISocketState,
}

const INITIAL_STATE = {
  status: EnumSocketStatus.Disconnected,
  wsURL: '',
  isError: false,
};

const socketReducer: Reducer<ISocketState, IAction> = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case CONNECTION_STATE:
      return {
        ...state,
        status: payload.status,
        isError: payload.isError,
        wsURL: payload.wsURL ? payload.wsURL : state.wsURL,
      }
    case CONNECT_SOCKET:
      return {
        ...state,
        status: EnumSocketStatus.Connected,
        isError: false,
      }
    case DISCONNECT_SOCKET:
      return {
        ...state,
        status: EnumSocketStatus.Disconnected,
        isError: false,
      }
    default:
      return state;
  }
}
export default socketReducer;

