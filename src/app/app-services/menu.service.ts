import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public pages = [
    {
      name: "Home",
      color: "light",
      fill: "clear",
      link: "/home"
    },
    {
      name: "Servizi",
      color: "light",
      fill: "clear",
      link: "/services"

    },
    {
      name: "Prenotazioni",
      color: "light",
      fill: "outline",
      link: "/reservations"

    },
  ]

  constructor() { }
}
