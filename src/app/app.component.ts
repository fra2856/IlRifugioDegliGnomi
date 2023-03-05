import { Component, ContentChildren, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, MenuController, Platform } from '@ionic/angular';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public platform: Platform,
  ) { }



}
