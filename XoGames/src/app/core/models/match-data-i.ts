import {SportTypeE} from "../enums/sport-type.enum";
import {MatchTypeE} from "../enums/match-type.enum";
import {Team} from "./team";

export interface MatchDataI {
  id: string;
  type: SportTypeE;
  status: MatchTypeE
  time: Date;
  teams: Team[];
  betOneX: number;
  betX: number;
  betTwoX: number;
  percent: number;
}
