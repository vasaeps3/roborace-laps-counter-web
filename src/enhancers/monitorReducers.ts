import { Reducer } from "react";

const round = (numbers: any) => Math.round(numbers * 100) / 100

const monitorReducersEnhancer = (createStore: any) => (
  reducer: any,
  initialState: any,
  enhancer: any
) => {
  const monitoredReducer: Reducer<any, any> = (state, action) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)

    console.log('reducer process time:', diff)

    return newState
  }

  return createStore(monitoredReducer, initialState, enhancer)
}

export default monitorReducersEnhancer;