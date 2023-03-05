import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuService } from '../app-services/menu.service';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  providers: [MenuService],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class ComponentsModule { }
