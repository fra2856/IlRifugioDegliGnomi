import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, NavbarComponent]
})
export class HomePageModule { }
