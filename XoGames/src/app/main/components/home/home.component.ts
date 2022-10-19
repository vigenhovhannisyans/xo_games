import {Component, OnDestroy, OnInit} from '@angular/core';
import {MobileService} from "../../../core/services/mobile.service";
import {Observable, Subject} from "rxjs";
import {SportService} from "../../../core/services/sport.service";
import {SportI} from "../../../core/models/sport-i";
import {HomeSecondSlider, HomeSlider, HomeSliderConfig, SoccerSliderConfig} from "./home-sliders/home-slider";
import {takeUntil} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {TicketDialogComponent} from "../dialogs/ticket-dialog/ticket-dialog.component";
import {MatchService} from "../../../core/services/match.service";
import {MatchTypeE} from "../../../core/enums/match-type.enum";
import {MatchDataI} from "../../../core/models/match-data-i";
import {SportTypeE} from "../../../core/enums/sport-type.enum";
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
  public _inPlayMatch!: Record<string, MatchDataI>;
  private _prematch!: Record<string, MatchDataI>;

  constructor(
    private _isMobileService: MobileService,
    private _sportService: SportService,
    private _matchService: MatchService,
    private _ticketDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getSoccer();
    this.getAllMatches();
  }

  getSoccer(): void {
    this._sportService.getSoccer().pipe(
      takeUntil(this._unsubscribe)
    ).subscribe(res => {
      this.soccerMatches = res;
    })
  }

  getAllMatches(): void {
    this._matchService.getMatches().pipe(
      takeUntil(this._unsubscribe),
    ).subscribe(res => {
      for(let [key,value] of Object.entries(res.inPlay)){
        this._inPlayMatch = {[key]:value};
        console.log(this._inPlayMatch);
      }
      for(let [key,value] of Object.entries(res.prematch)){
        this._prematch = {[key]:value};
        console.log(this._prematch);
      }
    })
  }
  public getMatchByType(): void{

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
