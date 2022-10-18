import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from "../shared/shared.module";
import { TicketDialogComponent } from './components/dialogs/ticket-dialog/ticket-dialog.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    TicketDialogComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
