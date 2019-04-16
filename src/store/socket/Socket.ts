import io from 'socket.io-client';


export const CONNECT = 'connect';
export const DISCONNECT = 'disconnect';
export const CONNECT_ERR = 'connect_error';
export const RECONNECT_ERR = 'reconnect_error';

export default class Socket {
  private socket!: SocketIOClient.Socket;

  constructor() { }

  connect = (wsURL: string): SocketIOClient.Socket => {
    this.socket = io.connect(wsURL, { reconnectionAttempts: 9 });
    return this.socket;
  };

  disconnect = () => {
    if (!this.socket || !this.socket.connected) {
      return;
    }
    this.socket.close()
  };

  // Received error from socket
  onError = message => {
    // this.onSocketError(message);
    this.disconnect();
  };

}
