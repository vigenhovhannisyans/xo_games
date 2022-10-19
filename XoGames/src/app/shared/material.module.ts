import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports:[
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class MaterialModule { }
