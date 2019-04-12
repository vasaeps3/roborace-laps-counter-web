import { Store } from "redux";

import { connectionChanged } from "../actions";


const socketMiddleware: any = (store: Store) => {

  // The socket's connection state changed
  const onConnectionChange = (isConnected: boolean) => {
    store.dispatch(connectionChanged(isConnected));
    // store.dispatch(statusChanged(isConnected ? 'Connected' : 'Disconnected'));
  };

  return (next: any) => (action: any) => {
    console.log('socketMiddleware');
    return next(action);
  }
}



export default socketMiddleware;
