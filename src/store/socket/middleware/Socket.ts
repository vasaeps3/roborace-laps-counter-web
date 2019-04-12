import io from 'socket.io-client';

// Messaging Protocol
export const IM = 'im';
export const IDENT = 'identify';
export const CONNECT = 'connect';
export const DISCONNECT = 'disconnect';
export const CONNECT_ERR = 'connect_error';
export const RECONNECT_ERR = 'reconnect_error';
export const UPDATE_CLIENT = 'update_client';
// Socket manager

export default class Socket {
  private socket!: SocketIOClient.Socket;

  constructor(
    private onChange: (arg0: boolean) => void,
    private onSocketError: (arg0: any) => void,
    private onMessage: Function,
    private onUpdateClient: Function
  ) { }

  // User clicked connect button
  connect = (wsURL: string) => {
    // Connect
    const host = `wsURL`;
    this.socket = io.connect(host);

    // Set listeners
    this.socket.on(CONNECT, this.onConnected);
    this.socket.on(DISCONNECT, this.onDisconnected);
    this.socket.on(CONNECT_ERR, this.onError);
    this.socket.on(RECONNECT_ERR, this.onError);
  };

  // Received connect event from socket
  onConnected = () => {
    this.sendIdent();
    this.socket.on(IM, this.onMessage);
    this.socket.on(UPDATE_CLIENT, this.onUpdateClient);
    this.onChange(true);
  };

  // Received disconnect event from socket
  onDisconnected = () => this.onChange(false);

  // Send an identification message to the server
  sendIdent = () => this.socket.emit(IDENT, 'NEW USER!');

  // Send a message over the socket
  sendIm = message => this.socket.emit(IM, message);

  // Close the socket
  disconnect = () => this.socket.close();

  // Received error from socket
  onError = message => {
    this.onSocketError(message);
    this.disconnect();
  };

}
