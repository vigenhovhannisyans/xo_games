import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {MobileService} from "./core/services/mobile.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'XoGames';
  isMobile$: Observable<boolean> = this._isMobileService.isMobile$;
  constructor(
    private _isMobileService: MobileService
  ){
  }
}
