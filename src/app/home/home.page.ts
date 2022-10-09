import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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

}
