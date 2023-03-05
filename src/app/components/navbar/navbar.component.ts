import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, MenuController, Platform } from '@ionic/angular';
import { MenuService } from 'src/app/app-services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  @Input() opacity: number;

  constructor(
    public platform: Platform,
    public menu: MenuService
  ) {
  }



}
