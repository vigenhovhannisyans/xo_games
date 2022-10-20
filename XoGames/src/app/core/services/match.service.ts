import { Injectable } from '@angular/core';
import {MatchI} from "../models/match-i";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  API_URL = environment.API_URL;
  constructor(
    private http: HttpClient
  ) { }

  getSoccer(): Observable<MatchI[]> {
    return this.http.get<MatchI[]>(`${this.API_URL}/match.json`)
  }
}
