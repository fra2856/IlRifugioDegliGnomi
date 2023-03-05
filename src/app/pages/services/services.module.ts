import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ServicesPage } from './services.page';

import { ServicesPageRoutingModule } from './services-routing.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ServicesPageRoutingModule,
  ],
  declarations: [ServicesPage, NavbarComponent]
})
export class ServicesPageModule { }
