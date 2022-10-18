import { Component, OnInit } from '@angular/core';
import { MobileService } from "../../../core/services/mobile.service";
import { Observable } from "rxjs";
import {SportService} from "../../../core/services/sport.service";
import {SportI} from "../../../core/models/sport-i";
interface Country {
  time: string;
  match: number;
  result: number;
  one: number;
  x: number;
  two: number;
  bets: number;
}

const COUNTRIES: Country[] = [
  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },
  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },  {
    time: 'Russia',
    match: 17075200,
    result: 17075200,
    one: 146989754,
    x: 146989754,
    two: 146989754,
    bets: 146989754,
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries = COUNTRIES;
  public inPlay = 0;
  public preMatch = 0;
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
      {
        breakpoint:1111,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:991,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:700,
        settings: {
          dots: true,
          slidesToShow: 1,
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
