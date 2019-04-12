import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './store/middleware/logger';
import rootReducer from './store/reducers';
import socketMiddleware from './store/middleware/socketMiddleware';


export default function configureStore(preloadedState?: any) {
  const middlewares = [socketMiddleware, thunk];
  // middlewares.push(loggerMiddleware);
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer,]; //monitorReducersEnhancer
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    (module as any).hot.accept('./store/reducers', () => store.replaceReducer(rootReducer))
  }

  return store;
}