import { Team } from "./team";
import {SportTypeE} from "../enums/sport-type.enum";

export interface SportI {
  firstTeam: Team;
  secondTeam: Team;
  day: Date;
  hour: string;
  sportType: SportTypeE;
}
