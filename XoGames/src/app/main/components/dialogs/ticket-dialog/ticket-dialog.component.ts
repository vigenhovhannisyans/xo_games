import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent implements OnInit {
  public bet = 0;
  public viewOrPutBet = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
