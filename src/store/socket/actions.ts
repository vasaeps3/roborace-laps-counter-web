import { Dispatch } from "redux";

import Socket, { CONNECT, DISCONNECT, CONNECT_ERR, RECONNECT_ERR } from "./Socket";
import { setRaceState as setRaceStatus, setRaceTime, setRobot } from "../race/actions";
import { SocketStatus } from "./interfaces";
import { SocketMessage, MessageType } from "../race/interfaces";


export const SOCKET_STATE_CHANGED = 'SOCKET/CONNECTION-STATE';
export const SOCKET_CONNECTED = 'SOCKET/CONNECT';
export const SOCKET_DISCONNECTED = 'SOCKET/DISCONNECT';
export const ROBORACE_STATE = 'ROBORACE/STATE';


export const disconnectSocket = () => (dispatch: Dispatch, getState: Function, { socket }: { socket: Socket }) => {
  socket.disconnect();
}

export const connectSocket = (wsURL: string) => (dispatch: Dispatch, getState: Function, { socket }: { socket: Socket }) => {
  socket.disconnect();
  const socketIOClient = socket.connect(wsURL);
  dispatch({ type: SOCKET_STATE_CHANGED, payload: { wsURL, status: SocketStatus.Connecting, isError: false } });
  socketIOClient.on(CONNECT, () => onConnected(dispatch));
  socketIOClient.on(DISCONNECT, () => onDisconnect(dispatch));
  socketIOClient.on(CONNECT_ERR, () => onError(dispatch));
  socketIOClient.on(RECONNECT_ERR, () => onError(dispatch));
  socketIOClient.on('message', (message: SocketMessage) => onMessage(message, dispatch));
}

const onMessage = (message: SocketMessage, dispatch: Dispatch) => {
  switch (message.type) {
    case MessageType.STATE:
      setRaceStatus(message.state, dispatch);
      break;
    case MessageType.TIME:
      setRaceTime(message.time, dispatch);
      break;
    case MessageType.LAP:
      setRobot(message, dispatch);
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
  dispatch({ type: SOCKET_STATE_CHANGED, payload: { status: SocketStatus.Connecting, isError: true } });
}

const onDisconnect = (dispatch: Dispatch) => {
  dispatch({ type: SOCKET_DISCONNECTED });
}

const onConnected = (dispatch: Dispatch) => {
  dispatch({ type: SOCKET_CONNECTED });
}