import { Team } from "./team";

export interface SportI {
  firstTeam: Team;
  secondTeam: Team;
  day: Date;
  hour: Date;
  sportType: string;
}
