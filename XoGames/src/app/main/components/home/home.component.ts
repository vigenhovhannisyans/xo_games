import { Component, OnInit } from '@angular/core';
import { MobileService } from "../../../core/services/mobile.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile$: Observable<boolean> = this._isMobileService.isMobile$;
  constructor(
    private _isMobileService: MobileService
  ) { }

  ngOnInit(): void {
  }
  slides = [
    {img: "../../../../assets/images/covers/slider.svg"},
    {img: "../../../../assets/images/covers/slider.svg"},
    {img: "../../../../assets/images/covers/slider.svg"},
  ];
  smallSlide = [
    {img: "../../../../assets/images/covers/slider-1.svg"},
    {img: "../../../../assets/images/covers/slider-1.svg"},
    {img: "../../../../assets/images/covers/slider-1.svg"},
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  soccerSliderConfig = {"slidesToShow": 5, "slidesToScroll": 1};
}
