import { Reducer, AnyAction } from 'redux';

import { STATUS_CHANGED } from '../actions';


interface IStatusState {
  status: boolean,
  isError: boolean,
}

const INITIAL_STATE: IStatusState = {
  status: false,
  isError: false
};

const statusReducer: Reducer<IStatusState, AnyAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.status,
        isError: action.isError
      }
    default:
      return state;
  }
}

export default statusReducer;