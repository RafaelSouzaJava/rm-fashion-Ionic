import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaMasculinoPage } from './categoria-masculino.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaMasculinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaMasculinoPageRoutingModule {}
