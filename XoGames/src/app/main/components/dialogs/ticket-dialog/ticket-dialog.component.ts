import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatchI} from "../../../../core/models/match-i";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {BetTypeE} from "../../../../core/enums/bet-type.enum";

type DialogData = {
  match: MatchI,
  betType: BetTypeE
}
type betType = {
  firstTeam: 25,
  secondTeam: 25,
  firstTeamCheck: false,
  secondTeamCheck: false,
}

type ScoreType = {
  value: number;
  display: string;
}

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent implements OnInit {
  public betForm = new FormGroup({
    firstTeam: new FormControl(0, [Validators.min(25), Validators.minLength(2), Validators.required]),
    secondTeam: new FormControl(0, [Validators.min(25), Validators.minLength(2), Validators.required]),
    checkedTeam: new FormControl(0, Validators.required),
  });
  public bet = 0;
  public viewOrPutBet = 0;
  public data!: DialogData;
  public possibleWinForFirstTeam = 0;
  public possibleWinForSecondTeam = 0;
  public firstTeamChecked = false;
  public disableButton = false;
  public showBetButton = false;
  public scores: ScoreType[] = [
    { value: 0, display: '0 - 0' },
    { value: 1, display: '1 - 1' },
    { value: 2, display: '2 - 2' },
    { value: 3, display: '3 - 3' },
    { value: 4, display: '4 - 4' },
    { value: 5, display: '5 - 5' },
  ]
  constructor(
    @Inject(MAT_DIALOG_DATA) private _dialogData: DialogData
  ) {
  }

  ngOnInit(): void {
    this.data = this._dialogData;
    if (this.data.betType === 'one') {
      this.betForm.updateValueAndValidity();
      this.betForm.controls.checkedTeam.setValue(1);
    } else if (this.data.betType === 'two') {
      this.betForm.controls.checkedTeam.setValue(2);
    }

    this.betForm.valueChanges.subscribe(res => {
      if (res.firstTeam) this.calculatePossibleWin(res.firstTeam, 'first');
      if (res.secondTeam) this.calculatePossibleWin(res.secondTeam, 'second');
      this.openBetButton()
    })
  }

  setDisableClass(id: number): boolean {
    return this.betForm.controls.checkedTeam.value === id
  }

  openBetButton(): void {
    const firstTeam = this.betForm.controls.firstTeam.value;
    const secondTeam = this.betForm.controls.secondTeam.value;
    const checkedTeam = this.betForm.controls.checkedTeam.value;
    // @ts-ignore
    this.showBetButton = checkedTeam === 1 && firstTeam > 25 || checkedTeam === 2 && secondTeam > 25;
  }

  calculatePossibleWin(bet: number, team: string): void {
    if (team === 'first') this.possibleWinForFirstTeam = Math.floor(this.data.match.ratioOne * bet);
    if (team === 'second') this.possibleWinForSecondTeam = Math.floor(this.data.match.ratioTwo * bet);
  }

  public get getBetTypeEnums() : typeof BetTypeE{
  return BetTypeE
  }
}
