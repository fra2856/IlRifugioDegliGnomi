import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // @ViewChild("parallax", { read: ElementRef }) image: ElementRef;

  public opacityVal: number = 1;

  constructor() { }

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
