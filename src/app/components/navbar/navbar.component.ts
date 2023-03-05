import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  @ViewChild(IonContent) content: IonContent;
  @Input() opacity: number;

  constructor(
    private router: Router,
    public platform: Platform,
    private menuController: MenuController
  ) {
  }

  public pages = [
    {
      name: "Home",
      color: "light",
      fill: "clear",
      action: () => this.goTo("/home"),
    },
    {
      name: "Servizi",
      color: "light",
      fill: "clear",
      action: () => this.goTo("/services"),

    },
    {
      name: "Prenotazioni",
      color: "light",
      fill: "outline",
      action: () => this.goTo("/reservations"),

    },
  ]



  goTo(route: string) {
    console.log(route);
    this.router.navigate([route]);
  }

}
