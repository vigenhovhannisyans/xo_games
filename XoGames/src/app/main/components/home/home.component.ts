import { Component, OnInit } from '@angular/core';
import { MobileService } from "../../../core/services/mobile.service";
import { Observable } from "rxjs";
import {SportService} from "../../../core/services/sport.service";
import {SportI} from "../../../core/models/sport-i";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public soccerMatches!: SportI[];
  isMobile$: Observable<boolean> = this._isMobileService.isMobile$;
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
  soccerSliderConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    responsive: [
      {
        breakpoint:1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
  };

  constructor(
    private _isMobileService: MobileService,
    private _sportService: SportService,
  ) { }

  ngOnInit(): void {
    this.getSoccer()
  }

  getSoccer(): void{
    this._sportService.getSoccer().subscribe(res => {
      this.soccerMatches = res;
    })
  }

}
