import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, Platform } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  // @ViewChild(IonContent) content: IonContent; 
  @Input() content: IonContent
  @Input() opacity: number;

  constructor(private router: Router, public platform: Platform) {
    console.log(platform.platforms());
  }

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
    this.content.scrollToPoint(0, y, 1000);
    console.log(y, this.content);

  }

}
