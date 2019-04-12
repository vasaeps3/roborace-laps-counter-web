import { AnyAction, Reducer } from "redux";


export const OPEN_SETTING = 'OPEN_SETTING';

const mockReducer: Reducer<string, AnyAction> = (prevState = '', action): string => {
  switch (action.type) {
    case OPEN_SETTING:
      return action.payload;
    default:
      return prevState;
  }
}

export default mockReducer;