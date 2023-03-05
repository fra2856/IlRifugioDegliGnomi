import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: 'services.page.html',
  styleUrls: ['services.page.scss'],
})
export class ServicesPage {

  // @ViewChild("parallax", { read: ElementRef }) image: ElementRef;

  public opacityVal: number = 1;

  constructor(public platform: Platform) { }

  onScroll($event) {
    let scrollTop = $event.detail.scrollTop;

    // this.domCtrl.write(() => {
    if (scrollTop >= 0) {
      this.opacityVal = 1 - scrollTop / 200;
    }
    // console.log("scroll", scrollTop, this.opacityVal);
    // this.render.setStyle(this.image.nativeElement, 'transform', `translateY(${this.moveImage}px)`)
    // })
  }
}
