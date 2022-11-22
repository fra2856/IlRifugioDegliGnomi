import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamerePage } from './camere.page';

const routes: Routes = [
  {
    path: '',
    component: CamerePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamerePageRoutingModule {}
