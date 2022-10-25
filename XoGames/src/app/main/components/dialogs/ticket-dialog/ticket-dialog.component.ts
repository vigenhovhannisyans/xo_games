import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatchI } from "../../../../core/models/match-i";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BetTypeE } from "../../../../core/enums/bet-type.enum";

type DialogData = {
  match: MatchI,
  betType: BetTypeE
}

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent implements OnInit {
  public betTeamName = ''
  public betForm = new FormGroup({
    firstTeam: new FormControl(25,[Validators.required, Validators.min(25)]),
    secondTeam: new FormControl(25, [Validators.required, Validators.min(25)]),
  });
  public bet = 0;
  public viewOrPutBet = 0;
  public data!: DialogData;
  public possibleWinForFirstTeam = 0;
  public possibleWinForSecondTeam = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _dialogData: DialogData
  ) {
  }

  ngOnInit(): void {
    this.data = this._dialogData;
    this.betForm.valueChanges.pipe().subscribe(control => {
        console.log(this.betForm);  
    })
  }

  addDisable(): boolean {
    let temp = false
    return temp
  }

}
