import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonContent) content: IonContent;

  pages = [
    {
      name: "Logo",
      image: "/assets/icon/logo-white.svg"
    },
    {
      name: "Home",
      color: "light"
    },
    {
      name: "Dove siamo",
      color: "light"
    },
    {
      name: "Servizi",
      color: "light"
    },
    {
      name: "Camere",
      color: "light"
    },
    {
      name: "Prenotazioni",
      color: "light"
    },
  ]

  constructor() { }

  scrollTo(elementId: string) {
    let y = document.getElementById(elementId).offsetTop;
    this.content.scrollToPoint(0, y, 1000);
  }
}
