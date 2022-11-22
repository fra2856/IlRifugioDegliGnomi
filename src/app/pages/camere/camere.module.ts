import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamerePageRoutingModule } from './camere-routing.module';

import { CamerePage } from './camere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamerePageRoutingModule
  ],
  declarations: [CamerePage]
})
export class CamerePageModule {}
