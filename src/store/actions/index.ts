import { OPEN_SETTING } from "../reducers/rootReducer";
// import { SET_INIT_WS_DATA } from "../reducers/wsReducer";

export const openSetting = (val: string) => ({ type: OPEN_SETTING, payload: val });
// export const loadInitWsData = (formData: any) => ({ type: SET_INIT_WS_DATA, payload: formData });

