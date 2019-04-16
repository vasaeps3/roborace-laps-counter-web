import { EnumRaceState } from "../enums/raceEnum";


export interface IRaceState {
  state?: EnumRaceState,
  robots?: any[],
}