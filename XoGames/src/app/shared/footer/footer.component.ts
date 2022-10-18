import {Component, OnInit} from '@angular/core';
import {MobileService} from "../../core/services/mobile.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isMobile$: Observable<boolean> = this._isMobileService.isMobile$;

  cardSlides = [
    {img: "../../../../assets/images/icons/astroy-card.svg"},
    {img: "../../../../assets/images/icons/bitcoin-card.svg"},
    {img: "../../../../assets/images/icons/eco-card.svg"},
    {img: "../../../../assets/images/icons/maestro-card.svg"},
    {img: "../../../../assets/images/icons/master-card.svg"},
    {img: "../../../../assets/images/icons/net-card.svg"},
    {img: "../../../../assets/images/icons/pay-card.svg"},
    {img: "../../../../assets/images/icons/perfect-card.svg"},
    {img: "../../../../assets/images/icons/skrill-card.svg"},
    {img: "../../../../assets/images/icons/visa-card.svg"},
    {img: "../../../../assets/images/icons/astroy-card.svg"},
    {img: "../../../../assets/images/icons/bitcoin-card.svg"},
    {img: "../../../../assets/images/icons/eco-card.svg"},
    {img: "../../../../assets/images/icons/maestro-card.svg"},
    {img: "../../../../assets/images/icons/master-card.svg"},
    {img: "../../../../assets/images/icons/net-card.svg"},
    {img: "../../../../assets/images/icons/pay-card.svg"},
    {img: "../../../../assets/images/icons/perfect-card.svg"},
    {img: "../../../../assets/images/icons/skrill-card.svg"},
    {img: "../../../../assets/images/icons/visa-card.svg"},
  ];
  cardSlideConfig = {
    "slidesToShow": 10,
    "slidesToScroll": 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
  };

  constructor(
    private _isMobileService: MobileService
  ) {
  }

  ngOnInit(): void {
  }

}
