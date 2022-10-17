import { Injectable } from '@angular/core';
import {SportI} from "../models/sport-i";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SportService {
  API_URL = environment.API_URL;
  soccer: SportI[] = [];
  constructor(
    private http: HttpClient
  ) { }

  getSoccer(): Observable<SportI[]> {
    return this.http.get<SportI[]>(`${this.API_URL}/soccer.json`)
  }
}
