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
import {MatchTypeE} from "../../../core/enums/match-type.enum";

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
  public inPlayMatches!: MatchI[];
  public preMatches!: MatchI[];
  private _unsubscribe = new Subject<boolean>();

  constructor(
    private _isMobileService: MobileService,
    private _sportService: MatchService,
    private _ticketDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this._getMatches();
  }

  private _getMatches(): void {
    this._sportService.getSoccer().pipe(
      takeUntil(this._unsubscribe)
    ).subscribe(res => {
      this.matches = res;
      this.inPlayMatches = res.filter(match => match.matchType === this.getMatchTypeE.IN_PLAY);
    })
  }

  get getSportTypeE(): typeof SportTypeE {
    return SportTypeE
  }

  get getMatchTypeE(): typeof MatchTypeE {
    return MatchTypeE
  }

  public openTicketDialog(event: any): void {
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

  public fetchMatches(matchType: MatchTypeE, sportType: SportTypeE): void {
    switch (sportType) {
      case this.getSportTypeE.SOCCER:
        this._addMatchesIntoArray(matchType, sportType);
        break;
      case this.getSportTypeE.TENNIS:
        this._addMatchesIntoArray(matchType, sportType);
        break;
      case this.getSportTypeE.BOXING:
        this._addMatchesIntoArray(matchType, sportType);
        break;
      case this.getSportTypeE.BASKETBALL:
        this._addMatchesIntoArray(matchType, sportType);
        break;
      case this.getSportTypeE.ALL:
        this._addMatchesIntoArray(matchType);
        break;
      default:
        this.inPlayMatches = [];
        break;
    }
  }

  private _getMatchByTypeAndSportType(matchType: MatchTypeE, sportType?: SportTypeE): MatchI[] {
    return this.matches.filter(match =>
      match.sportType === sportType &&
      match.matchType === matchType ||
      sportType === undefined &&
      match.matchType === matchType);
  }

  private _addMatchesIntoArray(matchType: MatchTypeE, sportType?: SportTypeE): void {
    if (matchType === this.getMatchTypeE.IN_PLAY) {
      this.inPlayMatches = this._getMatchByTypeAndSportType(matchType, sportType);
    } else if (matchType === this.getMatchTypeE.PREMATCH) {
      this.preMatches = this._getMatchByTypeAndSportType(matchType, sportType);
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe.next(true)
  }
}
