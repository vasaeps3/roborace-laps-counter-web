import { LOAD_INITDATA_WS } from "../actions";

const initialValue = { wsForm: { wsUrl: 'http://localhost:8000' } };

const initDataReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOAD_INITDATA_WS:
      return {
        ...state,
        wsForm: action.payload,
      }
    default:
      return state;
  }
}

export default initDataReducer;