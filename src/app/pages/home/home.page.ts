import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Platform } from '@ionic/angular';
import SwiperCore, { Autoplay, Navigation, Pagination, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    autoplay: {
      delay: 3000
    },
    speed: 1000,
    // navigation: true,

    loop: true
  }
  public headerOpacity: number = 1;
  public footerOpacity: number = 0;

  constructor(public platform: Platform) { }

  ionViewDidEnter() {
    this.swiper.swiperRef.autoplay.start();
  }

  onScroll($event) {
    let scrollTop = $event.detail.scrollTop;


    // this.domCtrl.write(() => {
    if (scrollTop >= 0) {
      this.headerOpacity = 1 - scrollTop / 200;
    }

    if (scrollTop > 0) {
      this.footerOpacity = 1 - 1 / scrollTop;
    }

    console.log($event.detail, scrollTop);
    // console.log("scroll", scrollTop, this.opacityVal);
    // this.render.setStyle(this.image.nativeElement, 'transform', `translateY(${this.moveImage}px)`)
    // })
  }


}


