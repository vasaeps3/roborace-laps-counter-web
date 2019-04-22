export enum RaceStatus {
  READY = 'READY',
  STEADY = 'STEADY',
  RUNNING = 'RUNNING',
  FINISH = 'FINISH',
}

export enum MessageType {
  STATE = 'STATE',
  LAP = 'LAP',
  TIME = 'TIME',
}

interface BaseSocketMessage {
  type: MessageType;
}

export interface StateSocketMessage extends BaseSocketMessage {
  type: MessageType.STATE,
  state: RaceStatus,
}

export interface LapSocketMessage extends BaseSocketMessage, IRobot {
  type: MessageType.LAP;
}

export interface TimeSocketMessage extends BaseSocketMessage {
  type: MessageType.TIME;
  time: number;
}

export interface IRobot {
  serial: number;
  num: number;
  laps: number;
  time: number;
  place: number;
}

export interface IRaceState {
  status: RaceStatus | null;
  robots: IRobot[];
  time: number;
}

export type SocketMessage = StateSocketMessage | LapSocketMessage | TimeSocketMessage;