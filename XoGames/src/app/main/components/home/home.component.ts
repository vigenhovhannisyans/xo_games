import {Component, OnDestroy, OnInit} from '@angular/core';
import {MobileService} from "../../../core/services/mobile.service";
import {Observable, Subject} from "rxjs";
import {MatchService} from "../../../core/services/match.service";
import {MatchI} from "../../../core/models/match-i";
import {
  HomeSecondSlider,
  HomeSlider,
  HomeSliderConfig,
  MatchSliderConfig,
} from "./home-sliders/home-slider";
import {takeUntil} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {TicketDialogComponent} from "../dialogs/ticket-dialog/ticket-dialog.component";
import {SportTypeE} from "../../../core/enums/sport-type.enum";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public countries = new Array(10);
  public inPlaySwitch = 0;
  public preMatchSwitch = 0;
  public matches!: MatchI[];
  public casino = 0;
  public casinoLive = 0;
  public isMobile$: Observable<boolean> = this._isMobileService.isMobile$;
  public slides = HomeSlider;
  public smallSlide = HomeSecondSlider;
  public matchSliderConfig = MatchSliderConfig;
  public slideConfig = HomeSliderConfig;
  private _unsubscribe = new Subject<boolean>();

  constructor(
    private _isMobileService: MobileService,
    private _sportService: MatchService,
    private _ticketDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getMatches();
  }

  getMatches(): void {
    this._sportService.getSoccer().pipe(
      takeUntil(this._unsubscribe)
    ).subscribe(res => {
      this.matches = res;
      console.log(this.matches);
    })
  }

  get getSportTypeE(): typeof SportTypeE{
    return SportTypeE
  }

  openTicketDialog(event: any): void {
    const dialogRef = this._ticketDialog.open(TicketDialogComponent,
      {
        width: '350px',
        height: '470px',
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
