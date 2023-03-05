import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-reservations',
  templateUrl: 'reservations.page.html',
  styleUrls: ['reservations.page.scss'],
})
export class ReservationsPage {

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
