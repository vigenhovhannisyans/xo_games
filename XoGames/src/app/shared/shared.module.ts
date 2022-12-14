import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {IconComponent} from "./icon/icon.component";
import {LivePointComponent} from "./live-point/live-point.component";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {MaterialModule} from "./material.module";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    IconComponent,
    LivePointComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SlickCarouselModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    IconComponent,
    LivePointComponent,
    SlickCarouselModule,
    MaterialModule,
  ]
})
export class SharedModule { }
