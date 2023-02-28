import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public platform: Platform, private router: Router, private menuController: MenuController) { }

  @ViewChild(IonContent, { static: false }) content: IonContent

  pages = [
    {
      name: "Home",
      color: "light",
      action: () => this.scrollTo("home"),
    },
    {
      name: "Dove siamo",
      color: "light",
      action: () => this.scrollTo("where"),

    },
    {
      name: "Servizi",
      color: "light",
      action: () => this.scrollTo("services"),

    },
    {
      name: "Camere",
      color: "light",
      action: () => this.goTo("/rooms"),

    },
    {
      name: "Prenotazioni",
      color: "light",
      action: () => this.goTo("/reservations"),

    },
  ]

  goTo(route: string) {
    console.log(route);
    this.router.navigate([route]);
  }

  scrollTo(elementId: string) {
    let y = document.getElementById(elementId).offsetTop;
    this.menuController.close();
    this.content.scrollToPoint(0, y, 1000);
    console.log(y, this.content);

  }
}
