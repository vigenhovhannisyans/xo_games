import {Injectable} from '@angular/core';
import {Subject, Observable} from "rxjs";
import {map, takeUntil} from "rxjs/operators";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  isMobile$: Observable<boolean> = this._breakPointObserver.observe('(min-width: 1111px)').pipe(
    takeUntil(this._unsubscribeAll),
    map((state: BreakpointState) => !state.matches)
  );

  constructor(
    private _breakPointObserver: BreakpointObserver
  ) {

  }
}
