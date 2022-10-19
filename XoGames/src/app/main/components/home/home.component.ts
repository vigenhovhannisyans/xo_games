import {Component, OnDestroy, OnInit} from '@angular/core';
import {MobileService} from "../../../core/services/mobile.service";
import {Observable, Subject} from "rxjs";
import {SportService} from "../../../core/services/sport.service";
import {SportI} from "../../../core/models/sport-i";
import {HomeSlider, HomeSecondSlider, SoccerSliderConfig, HomeSliderConfig} from "./home-sliders/home-slider";
import {takeUntil} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {TicketDialogComponent} from "../dialogs/ticket-dialog/ticket-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public countries = new Array(10);
  public inPlay = 0;
  public preMatch = 0;
  public soccerMatches!: SportI[];
  public casino = 0;
  public casinoLive = 0;
  public isMobile$: Observable<boolean> = this._isMobileService.isMobile$;
  public slides = HomeSlider;
  public smallSlide = HomeSecondSlider;
  public soccerSliderConfig = SoccerSliderConfig;
  public slideConfig = HomeSliderConfig;
  private _unsubscribe = new Subject<boolean>();

  constructor(
    private _isMobileService: MobileService,
    private _sportService: SportService,
    private _ticketDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getSoccer()
  }

  getSoccer(): void {
    this._sportService.getSoccer().pipe(
      takeUntil(this._unsubscribe)
    ).subscribe(res => {
      this.soccerMatches = res;
    })
  }

  openTicketDialog(event: any): void {
    const dialogRef = this._ticketDialog.open(TicketDialogComponent,
      {
        width: '325px',
        height: '442px',
        panelClass: 'ticket-dialog',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log(event);
  }

  ngOnDestroy(): void {
    this._unsubscribe.next(true)
  }

}
