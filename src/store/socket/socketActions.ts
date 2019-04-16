import { Dispatch } from "redux";

import { EnumSocketStatus } from "../../utils/enums/socketEnums";
import Socket, { CONNECT, DISCONNECT, CONNECT_ERR, RECONNECT_ERR } from "./Socket";
import { ISocketState } from "../../utils/models/socketModels";
import { EnumRaceState } from "../../utils/enums/raceEnum";
import { setRaceState } from "../race/raceActions";


export const CONNECTION_STATE = 'SOCKET/CONNECTION-STATE';
export const CONNECT_SOCKET = 'SOCKET/CONNECT';
export const DISCONNECT_SOCKET = 'SOCKET/DISCONNECT';
export const ROBORACE_STATE = 'ROBORACE/STATE';

enum TypeMessage {
  STATE = 'STATE',
  LAP = 'LAP',
  TIME = 'TIME',
}


interface Message {
  type?: TypeMessage,
  state?: EnumRaceState,
  time?: number,
  laps?: number,
  num?: number,
  place?: number,
  serial?: number,
}

export const connectionChanged = (payload: ISocketState) => ({ type: CONNECTION_STATE, payload });
export const disconnectSocket = () => (dispatch: Dispatch, getState: Function, { socket }: { socket: Socket }) => {
  socket.disconnect();
}

export const connectSocket = (wsURL: string) => (dispatch: Dispatch, getState: Function, { socket }: { socket: Socket }) => {
  socket.disconnect();
  const socketIOClient = socket.connect(wsURL);
  dispatch({ type: CONNECTION_STATE, payload: { wsURL, status: EnumSocketStatus.Connecting, isError: false } });
  socketIOClient.on(CONNECT, () => onConnected(dispatch));
  socketIOClient.on(DISCONNECT, () => onDisconnect(dispatch));
  socketIOClient.on(CONNECT_ERR, () => onError(dispatch));
  socketIOClient.on(RECONNECT_ERR, () => onError(dispatch));
  socketIOClient.on('message', (message: Message) => onMessage(message, dispatch));
}

const onMessage = (message: Message, dispatch: Dispatch) => {
  console.log(message);
  switch (message.type) {
    case TypeMessage.STATE:
      console.log({ state: message.state });
      setRaceState({ state: message.state }, dispatch);
      // onChangeRoboRaceState(message.state, dispatch);
      break;
    default:
      break;
  }

  // const test = {
  //   "type": "LAP",
  //   "serial": 101,
  //   "num": 2,
  //   "laps": 0,
  //   "time": 0,
  //   "place": 2
  // }
  //   [    UI] Message received = [{"type":"STATE","state":"READY"}]
  // [ROBOT1] Opening websocket userSession = [org.apache.tomcat.websocket.WsSession@16d41725]
  // [ROBOT1] Message received = [{"type":"STATE","state":"READY"}]
  // [ROBOT1] Send message = [{"type":"ROBOT_INIT","serial":100}]
  // [    UI] Message received = [{"type":"LAP","serial":100,"num":1,"laps":0,"time":0,"place":1}]
  // [ROBOT1] Message received = [{"type":"LAP","serial":100,"num":1,"laps":0,"time":0,"place":1}]
  // [ROBOT2] Opening websocket userSession = [org.apache.tomcat.websocket.WsSession@721bf7ad]
  // [ROBOT2] Message received = [{"type":"STATE","state":"READY"}]
  // [ROBOT2] Send message = [{"type":"ROBOT_INIT","serial":101}]
  // [    UI] Message received = [{"type":"LAP","serial":101,"num":2,"laps":0,"time":0,"place":2}]
  // [ROBOT2] Message received = [{"type":"LAP","serial":101,"num":2,"laps":0,"time":0,"place":2}]
  // [ROBOT1] Message received = [{"type":"LAP","serial":101,"num":2,"laps":0,"time":0,"place":2}]
  // [    UI] Send message = [{"type":"LAPS"}]
  // [    UI] Message received = [{"type":"LAP","serial":100,"num":1,"laps":0,"time":0,"place":1}]
  // [    UI] Message received = [{"type":"LAP","serial":101,"num":2,"laps":0,"time":0,"place":2}]
}

const onError = (dispatch: Dispatch) => {
  dispatch({ type: CONNECTION_STATE, payload: { status: EnumSocketStatus.Connecting, isError: true } });
}

const onDisconnect = (dispatch: Dispatch) => {
  dispatch({ type: DISCONNECT_SOCKET });
}

const onConnected = (dispatch: Dispatch) => {
  dispatch({ type: CONNECT_SOCKET });
}