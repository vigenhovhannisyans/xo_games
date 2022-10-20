export const HomeSlider = [
  {img: "../../../../assets/images/covers/slider.svg"},
  {img: "../../../../assets/images/covers/slider.svg"},
  {img: "../../../../assets/images/covers/slider.svg"},
];

export const HomeSecondSlider = [
  {img: "../../../../assets/images/covers/slider-1.svg"},
  {img: "../../../../assets/images/covers/slider-1.svg"},
  {img: "../../../../assets/images/covers/slider-1.svg"},
];

export const MatchSliderConfig = {
  "slidesToShow": 5,
  "slidesToScroll": 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1111,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
};

export const HomeSliderConfig = {
  "slidesToShow": 1,
  "slidesToScroll": 1
};
