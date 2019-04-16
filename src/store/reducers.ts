import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import initDataReducer from "./initData/reducers";
import raceReducer from "./race/raceReducer";
import socketReducer from "./socket/socketRedicer";


export default combineReducers({
  form: formReducer,
  initialFormData: initDataReducer,
  socketState: socketReducer,
  race: raceReducer,
});