import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { ComponentsModule } from 'src/app/components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    SwiperModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
