import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ReservationsPageRoutingModule } from './reservations-routing.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AppModule } from 'src/app/app.module';
import { ReservationsPage } from './reservations.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReservationsPageRoutingModule,
  ],
  declarations: [ReservationsPage, NavbarComponent]
})
export class ReservationsPageModule { }
