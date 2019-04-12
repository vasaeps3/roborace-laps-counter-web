import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import mockReducer from "./rootReducer";
import wsReducer from "./wsReducer";


export default combineReducers({
  form: formReducer,
  mockReducer,
  initialFormData: wsReducer,
});