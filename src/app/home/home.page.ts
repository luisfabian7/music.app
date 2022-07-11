import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    slideOpt = {
      unitialSlide: 0,//slide incial
      slidesPerView: 1,//slide por vista
      centeredSlides: true, // que slide se centren
      speed: 400 //velocidad de slide
    } 
  constructor() {}

}
