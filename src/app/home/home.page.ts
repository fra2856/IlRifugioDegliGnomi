import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DomController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonContent) content: IonContent;
  @ViewChild("parallax", { read: ElementRef }) image: ElementRef;

  public moveImage: number = 0;

  pages = [
    {
      name: "Logo",
      image: "/assets/icon/logo-white.svg",
      element: "section1"
    },
    {
      name: "Home",
      color: "light",
      element: "section1"
    },
    {
      name: "Dove siamo",
      color: "light",
      element: "section2"
    },
    {
      name: "Servizi",
      color: "light",
      element: "section3"
    },
    {
      name: "Camere",
      color: "light",
      element: "camere"
    },
    {
      name: "Prenotazioni",
      color: "light",
      element: "prenotazioni"
    },
  ]

  constructor(private domCtrl: DomController, private render: Renderer2) { }

  scrollTo(elementId: string) {
    let y = document.getElementById(elementId).offsetTop;
    this.content.scrollToPoint(0, y, 1000);
  }

  onScroll($event) {
    let scrollTop = $event.detail.scrollTop;

    // this.domCtrl.write(() => {
    if (scrollTop > 0) {
      this.moveImage = scrollTop / 2;
    }
    // console.log("scroll", scrollTop, moveImage, this.image.nativeElement);
    // console.log(this.moveImage);


    // this.render.setStyle(this.image.nativeElement, 'transform', `translateY(${this.moveImage}px)`)
    // })
  }
}
