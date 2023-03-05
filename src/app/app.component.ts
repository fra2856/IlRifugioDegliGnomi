import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MenuService } from './app-services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public platform: Platform,
    private menu: MenuService
  ) { }

}
