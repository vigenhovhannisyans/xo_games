import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {MatchI} from "../models/match-i";
import {HttpClient} from "@angular/common/http";
import {MatchDataI} from "../models/match-data-i";

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  API_URL = environment.API_URL;
  constructor(
    private http: HttpClient
  ) { }

  getMatches(): Observable<MatchI<MatchDataI>>{
    return this.http.get<MatchI<MatchDataI>>(`${this.API_URL}/match.json`)
  }
}
