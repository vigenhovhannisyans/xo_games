import { Team } from "./team";
import {MatchTypeE} from "../enums/match-type.enum";
import {SportTypeE} from "../enums/sport-type.enum";

export interface MatchI {
  firstTeam: Team;
  secondTeam: Team;
  day: Date;
  hour: Date;
  sportType: SportTypeE;
  matchType: MatchTypeE;
  ratioOne: number;
  ratioTwo: number;
  ratioX: number;
  ratioBet: number;

}
