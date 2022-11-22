import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  @ViewChild(IonContent) content: IonContent;
  @Input() opacity: number;


  constructor(private router: Router) { }

  pages = [

    {
      name: "Home",
      color: "light",
      action: () => this.scrollTo("section1"),
    },
    {
      name: "Dove siamo",
      color: "light",
      action: () => this.scrollTo("section2"),

    },
    {
      name: "Servizi",
      color: "light",
      action: () => this.scrollTo("section3"),

    },
    {
      name: "Camere",
      color: "light",
      action: () => this.goTo("/camere"),

    },
    {
      name: "Prenotazioni",
      color: "light",
      action: () => this.goTo("/camere"),

    },
  ]


  goTo(route: string) {
    this.router.navigate([route]);
  }

  scrollTo(elementId: string) {
    let y = document.getElementById(elementId).offsetTop;
    this.content.scrollToPoint(0, y, 1000);
  }




}
