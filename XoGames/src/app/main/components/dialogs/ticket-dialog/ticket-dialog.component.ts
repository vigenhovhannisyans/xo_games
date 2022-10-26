import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatchI} from "../../../../core/models/match-i";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {BetTypeE} from "../../../../core/enums/bet-type.enum";
import {debounceTime, distinct, distinctUntilChanged, filter, take} from "rxjs/operators";

type DialogData = {
  match: MatchI,
  betType: BetTypeE
}
type betType = {
  firstTeam:25,
  secondTeam:25,
  firstTeamCheck:false,
  secondTeamCheck:false,
}
@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent implements OnInit {
  public betForm = new FormGroup({
    firstTeam: new FormControl(''),
    secondTeam: new FormControl(''),
    checkedTeam: new FormControl('', Validators.required),
  });
  public bet = 0;
  public viewOrPutBet = 0;
  public data!: DialogData;
  public possibleWinForFirstTeam = 0;
  public possibleWinForSecondTeam = 0;
  public firstTeamChecked = false;
  public disableButton = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) private _dialogData: DialogData
  ) {
  }

  ngOnInit(): void {
    this.data = this._dialogData;
    this.betForm.controls.checkedTeam.valueChanges.subscribe(res => {
      console.log(this.betForm.status);
      console.log(res);
    })
  }
}
