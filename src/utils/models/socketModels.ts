import { EnumSocketStatus } from "../enums/socketEnums";


export interface ISocketState {
    status?: EnumSocketStatus,
    isError?: boolean,
    wsURL?: string,
}