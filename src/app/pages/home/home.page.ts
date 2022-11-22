import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DomController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild("parallax", { read: ElementRef }) image: ElementRef;

  public opacityVal: number = 1;



  constructor(private domCtrl: DomController, private render: Renderer2, private router: Router) { }

  onScroll($event) {
    let scrollTop = $event.detail.scrollTop;

    // this.domCtrl.write(() => {
    if (scrollTop > 0) {
      this.opacityVal = 1 - scrollTop / 200;
    }
    console.log("scroll", scrollTop, this.opacityVal);
    // console.log(this.moveImage);


    // this.render.setStyle(this.image.nativeElement, 'transform', `translateY(${this.moveImage}px)`)
    // })
  }
}
